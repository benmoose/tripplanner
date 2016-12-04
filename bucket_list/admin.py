from django.contrib import admin

from .models import BucketList, BucketListItem


admin.site.register(BucketList)
admin.site.register(BucketListItem)
