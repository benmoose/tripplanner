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
    users = models.ManyToManyField(User)
    title = models.CharField(max_length=60)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
