import uuid

from django.db import models
from django.contrib.auth.models import User

from _common.models.abstract_models import TimeStampedModel,\
    RichTextAndPreviewTextModel


class Trip(TimeStampedModel, RichTextAndPreviewTextModel):
    """
    This model represents a trip.
    Each trip can have multiple users and each user can belong to 0 or more trips.

    Trips store high level information about a trip such as a name, time of creation,
    list of users involved ect...
    """
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    users = models.ManyToManyField(User)
    title = models.CharField(max_length=60)
    active = models.BooleanField(default=True)
    origin_title = models.CharField(max_length=100, blank=True)
    origin_longitude = models.DecimalField(max_digits=10, decimal_places=7,
                                           blank=True, null=True)
    origin_latitude = models.DecimalField(max_digits=10, decimal_places=7,
                                          blank=True, null=True)
    destination_title = models.CharField(max_length=100, blank=True)
    destination_longitude = models.DecimalField(max_digits=10, decimal_places=7,
                                                blank=True, null=True)
    destination_latitude = models.DecimalField(max_digits=10, decimal_places=7,
                                               blank=True, null=True)

    def get_trip_locations(self):
        return TripLocation.objects.filter(trip=self).order_by('-arrive')

    def __str__(self):
        return self.title


class TripLocation(models.Model):
    """
    This model represents a destination on the trip.
    """
    trip = models.ForeignKey(Trip)
    title = models.CharField(max_length=100)
    longitude = models.DecimalField(max_digits=10, decimal_places=7)
    latitude = models.DecimalField(max_digits=10, decimal_places=7)
    order = models.PositiveSmallIntegerField(default=0, unique=True)
    arrive = models.DateTimeField(blank=True, null=True)
    depart = models.DateTimeField(blank=True, null=True)
