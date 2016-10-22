from django.views.generic import TemplateView

from rest_framework import generics

from .serializers import TripSerializer
from .models import Trip


# Application

class Application(TemplateView):
    template_name = 'application.html'


# API Views

class TripList(generics.ListAPIView):
    """
    Returns an array of trips for the current user.
    """
    queryset = Trip.objects.filter(active=True)
    serializer_class = TripSerializer

    def filter_queryset(self, queryset):
        """
        This ensures that user's can only see trips they are involved with.
        """
        return queryset.filter(
            users__username__contains=self.request.user.username)


class TripDetail(generics.RetrieveAPIView):
    """Returns details for a single trip."""
    queryset = Trip.objects.filter(active=True)
    serializer_class = TripSerializer
    lookup_field = 'uuid'

    def filter_queryset(self, queryset):
        """
        This ensures that user's can only see trips they are involved with.
        """
        return queryset.filter(
            users__username__contains=self.request.user.username)
