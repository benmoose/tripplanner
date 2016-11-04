from rest_framework import serializers

from .models import UserJWT


class UserJWTSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserJWT
        fields = ('sub',)
