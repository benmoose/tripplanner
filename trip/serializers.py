from rest_framework import serializers

from .models import Trip, TripLocation


class TripLocationSerializer(serializers.ModelSerializer):
    arrive = serializers.DateTimeField(format='%A %d, %B')
    depart = serializers.DateTimeField(format='%A %d, %B')

    class Meta:
        model = TripLocation
        fields = ('title', 'order', 'longitude', 'latitude', 'arrive',
                  'depart')


class TripSerializer(serializers.ModelSerializer):
    get_trip_locations = TripLocationSerializer(many=True)

    class Meta:
        model = Trip
        fields = ('title', 'get_trip_locations',
                  'origin_title', 'origin_longitude', 'origin_latitude',
                  'destination_title', 'destination_longitude',
                  'destination_latitude',)
