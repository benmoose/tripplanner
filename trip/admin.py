from django.contrib import admin

from .models import Trip


class TripAdmin(admin.ModelAdmin):
    list_filter = ('active',)
    filter_horizontal = ('users',)
    readonly_fields = ('created', 'modified',)

    fieldsets = (
        (None, {
            'fields': ('title', 'content', 'active',),
        },),
        ('Additional Information', {
            'fields': ('created', 'modified',)
        },)
    )

    class Meta:
        pass

admin.site.register(Trip, TripAdmin)
