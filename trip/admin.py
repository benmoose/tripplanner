from django.contrib import admin

from .models import Trip, TripLocation


class TripAdmin(admin.ModelAdmin):
    list_filter = ('active',)
    filter_horizontal = ('users',)
    readonly_fields = ('uuid', 'created', 'modified',)

    fieldsets = (
        (None, {
            'fields': ('title', 'content', 'users', 'active',),
        },),
        ('Origin and Destination', {
            'fields': ('origin_title', 'origin_longitude', 'origin_latitude',
                       'destination_title', 'destination_longitude',
                       'destination_latitude'),
        },),
        ('Additional Information', {
            'fields': ('uuid', 'created', 'modified',)
        },)
    )


class TripLocationAdmin(admin.ModelAdmin):
    list_display = ('title', 'trip', 'order',)
    list_filter = ('trip',)
    ordering = ('trip', 'order', 'id',)


admin.site.register(Trip, TripAdmin)
admin.site.register(TripLocation, TripLocationAdmin)
