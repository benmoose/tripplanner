from rest_framework import serializers

from user_jwt.serializers import UserJWTSerializer
from todo_list.serializer import TodoListSerializer
from bucketlist.serializers import BucketListSerializer
from .models import Trip, TripLocation


class TripLocationSerializer(serializers.ModelSerializer):
    arrive = serializers.DateTimeField(format='%A %d, %B')
    depart = serializers.DateTimeField(format='%A %d, %B')
    travel_icon = serializers.CharField(source='get_travel_icon')
    travel_type = serializers.CharField(source='get_travel_type_display')
    bucket_list = BucketListSerializer(source='get_bucket_list')

    class Meta:
        model = TripLocation
        fields = ('title', 'longitude', 'latitude', 'arrive', 'depart',
                  'travel_type', 'travel_icon', 'bucket_list')


class TripSerializer(serializers.ModelSerializer):
    locations = TripLocationSerializer(many=True, source='get_trip_locations')
    todo = TodoListSerializer(source='get_todo_list')

    class Meta:
        model = Trip
        fields = ('uuid', 'title', 'get_absolute_url', 'todo', 'locations',
                  'created', 'modified',)


class SimpleTripSerializer(serializers.ModelSerializer):
    """Serializer for rendering trip changer list."""
    users = UserJWTSerializer(read_only=True, many=True)

    class Meta:
        model = Trip
        fields = ('uuid', 'title', 'users',)
