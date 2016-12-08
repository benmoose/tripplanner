from rest_framework import serializers

from vote.serializers import VoteSerializer
from .models import BucketList, BucketListItem


class BucketListItemSerializer(serializers.ModelSerializer):
    votes = VoteSerializer(many=True)

    class Meta:
        model = BucketListItem
        fields = ('title', 'description', 'is_complete', 'votes',)


class BucketListSerializer(serializers.ModelSerializer):
    items = BucketListItemSerializer(source='get_bucket_list_items', many=True)

    class Meta:
        model = BucketList
        fields = ('items',)
