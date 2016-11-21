from django.db import models

from _common.models.mixins.mixins import TimeStampedModel, CompletableModel
from trip.models import Trip


class BucketList(TimeStampedModel):
    """This model represents a single bucket-list for a single trip."""
    trip = models.OneToOneField(Trip)


class BucketListItem(TimeStampedModel,
                     CompletableModel):
    """This model represents a single item in a bucket-list."""
    bucket_list = models.ForeignKey(BucketList)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title
