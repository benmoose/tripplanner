from rest_framework import serializers

from .models import BucketList, BucketListItem


class BucketListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BucketListItem
        fields = ('title', 'description',)


class BucketListSerializer(serializers.ModelSerializer):
    items = BucketListItemSerializer(source='get_bucket_list_items', many=True)

    class Meta:
        model = BucketList
        fields = ('items',)
