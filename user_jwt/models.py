from django.db import models

from _common.models.abstract_models import TimeStampedModel


class UserJWT(TimeStampedModel):
    """User represented by a JWT Token."""
    sub = models.CharField(max_length=64, unique=True)

    def set_sub_from_token(self, token):
        self.sub = self.jwt_get_sub(token)
