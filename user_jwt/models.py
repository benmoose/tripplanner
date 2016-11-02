from django.db import models

from _common.models.abstract_models import TimeStampedModel


class UserJWT(TimeStampedModel):
    """User represented by a JWT Token."""
    jwt_sub = models.CharField(max_length=64, unique=True)
