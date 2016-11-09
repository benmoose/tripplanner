from django.db import models

from _common.models.mixins.mixins import TimeStampedModel


class UserJWT(TimeStampedModel):
    """User represented by a JWT Token."""
    sub = models.CharField(max_length=64, unique=True)
