import uuid

from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

from _common.models.abstract_models import TimeStampedModel,\
    RichTextAndPreviewTextModel

from .constants.choices import TRAVEL_TYPES, TRAVEL_TO_FONTAWEOME


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

    def get_trip_locations(self):
        return TripLocation.objects.filter(trip=self).order_by('arrive')

    def get_absolute_url(self):
        return '/{}'.format(self.uuid)

    def __str__(self):
        return self.title


class TripLocation(models.Model):
    """
    This model represents a destination on the trip.
    """

    # associate with a trip
    trip = models.ForeignKey(Trip)

    # location of the TripLocation
    title = models.CharField(max_length=100)
    longitude = models.DecimalField(max_digits=10, decimal_places=7)
    latitude = models.DecimalField(max_digits=10, decimal_places=7)

    # time user arrives and departs that location
    arrive = models.DateTimeField(blank=True, null=True)
    depart = models.DateTimeField(blank=True, null=True)

    # travel details of user from this location
    travel_type = models.PositiveSmallIntegerField(choices=TRAVEL_TYPES,
                                                   blank=True, null=True)

    def get_travel_icon(self):
        """Returns FontAwesome class for icon"""
        return TRAVEL_TO_FONTAWEOME.get(
            self.travel_type if self.travel_type else 'default')

    def get_travel_location(self):
        """Next travel location is one with next nearest arrival time."""
        return TripLocation.objects.filter(trip=self.trip)\
            .filter(arrive__gt=self.arrive).first()

    class Meta:
        unique_together = ('trip', 'arrive',)
