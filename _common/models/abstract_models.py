"""
Abstract Models for site-wide inheritance.
"""

from django.db import models
from django.utils import formats
from django.utils.text import slugify
from django.template.defaultfilters import striptags

from redactor.fields import RedactorField


class TimeStampedModel(models.Model):
    """Model for adding created and modified fields to models."""
    created = models.DateTimeField(auto_now_add=True, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)

    def get_created_string(self):
        return formats.date_format(self.created, 'd M Y')

    def get_modified_string(self):
        return formats.date_format(self.modified, 'd M Y')

    class Meta:
        abstract = True


class SlugModel(models.Model):
    """
    Model with a slug field that is automatically generated when the generate_slug method is called.
    Call set_slug_generator_field_name to choose the field name to generate the slug from (defaults to 'title').
    """
    slug = models.SlugField(editable=False, unique=True)
    slug_generator_field_name = 'title'

    def generate_slug(self, field_name, i=0):
        slug_source = '{0}{1}'.format(getattr(self, field_name),
                                      '-{}'.format(i) if i else '')
        slug = slugify(slug_source)
        try:
            self.__class__.objects.get(slug=slug)
            return self.generate_slug(field_name, i + 1)
        except self.DoesNotExist:
            return slug

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.generate_slug(self.slug_generator_field_name)
        super().save(*args, **kwargs)

    class Meta:
        abstract = True


class RecordViewsModel(models.Model):
    """
    Model for recording number of views a particular instance has received.
    This class simply defines a views field and increment_views method. The value a view represents could be anything.

    Remember to implement the functionality which calls increment_view in sub-classes.
    """

    views = models.PositiveIntegerField(default=0, editable=False)

    def increment_view(self):
        self.views += 1
        self.save()

    class Meta:
        abstract = True


class VoteableModel(models.Model):
    upvotes = models.PositiveIntegerField(default=0, editable=False)

    def increment_upvotes(self):
        self.upvotes += 1
        self.save()

    class Meta:
        abstract = True


class RichTextAndPreviewTextModel(models.Model):
    """
    Model which has a RedactorField for Rich text editing and a function which
    returns a snippet of the content in the rich text field.
    """

    content = RedactorField(allow_file_upload=False, allow_image_upload=True,
                            blank=True)

    def get_preview_content(self, words=31):
        """
        This returns a truncation of the value of content for use as preview
        text. HTML tags are removed.
        """
        content = striptags(self.content)
        content_as_array = content.split(' ')
        truncated_content = content_as_array[:words]
        return '{0}{1}'.format(' '.join(truncated_content),
                               '' if len(content_as_array) <= words else '...')

    class Meta:
        abstract = True
