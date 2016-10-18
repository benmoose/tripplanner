from django.db import models

from _common.models.abstract_models import TimeStampedModel


class Trip(TimeStampedModel, models.Model):
    """
    This model represents a trip.
    Each trip can have multiple users and each user can belong to 0 or more trips.

    Trips store high level information about a trip such as a name, time of creation,
    list of users involved ect...
    """
    pass
