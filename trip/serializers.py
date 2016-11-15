from rest_framework import serializers

from user_jwt.serializers import UserJWTSerializer
from .models import Trip, TripLocation


class TripLocationSerializer(serializers.ModelSerializer):
    arrive = serializers.DateTimeField(format='%A %d, %B')
    depart = serializers.DateTimeField(format='%A %d, %B')
    travel_icon = serializers.CharField(source='get_travel_icon')
    travel_type = serializers.CharField(source='get_travel_type_display')

    class Meta:
        model = TripLocation
        fields = ('title', 'longitude', 'latitude', 'arrive', 'depart',
                  'travel_type', 'travel_icon')


class TripSerializer(serializers.ModelSerializer):
    locations = TripLocationSerializer(many=True, source='get_trip_locations')

    class Meta:
        model = Trip
        fields = ('title', 'get_absolute_url', 'locations', 'created',
                  'modified',)


class SimpleTripSerializer(serializers.ModelSerializer):
    users = UserJWTSerializer(read_only=True, many=True)

    class Meta:
        model = Trip
        fields = ('uuid', 'title', 'users',)
