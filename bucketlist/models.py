from django.db import models

from _common.models.mixins.mixins import TimeStampedModel, CompletableModel
from trip.models import TripLocation


class BucketList(TimeStampedModel):
    """This model represents a single bucket-list for a single trip."""
    trip_location = models.OneToOneField(TripLocation)

    def get_bucket_list_items(self):
        return BucketListItem.objects.filter(bucket_list=self)

    def __str__(self):
        return '{}\'s bucket list'.format(self.trip_location.title)


class BucketListItem(TimeStampedModel,
                     CompletableModel):
    """This model represents a single item in a bucket-list."""
    bucket_list = models.ForeignKey(BucketList)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title
