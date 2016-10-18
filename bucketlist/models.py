from django.db import models

from _common.models.abstract_models import TimeStampedModel
from trip.models import Trip


class BucketList(TimeStampedModel):
    """This model represents a single BucketList for a users trip"""
    trip = models.OneToOneField(Trip)


class BucketListItem(TimeStampedModel):
    """This model represents a single item in a BucketList"""
    bucket_list = models.ForeignKey(BucketList)
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def set_completed(self):
        self.completed = True
        self.save()

    def set_uncompleted(self):
        self.completed = False
        self.save()

    def __str__(self):
        return self.title
