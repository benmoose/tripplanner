from django.db import models

from _common.models.mixins.mixins import TimeStampedModel


class UserJWT(TimeStampedModel):
    """User represented by a JWT."""
    sub = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.sub
