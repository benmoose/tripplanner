from django.views.generic import TemplateView

from rest_framework import generics

from user_jwt.utility.jwt_authentication import header_to_sub
from .serializers import TripSerializer, SimpleTripSerializer
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
    serializer_class = SimpleTripSerializer

    def filter_queryset(self, queryset):
        """
        This ensures that user's can only see trips they are involved with.
        """
        return queryset.filter(
            users__sub=header_to_sub(
                self.request.META.get('HTTP_AUTHORIZATION')))


class TripDetail(generics.RetrieveAPIView):
    """
    Returns details for a single trip.
    """
    queryset = Trip.objects.filter(active=True)
    serializer_class = TripSerializer
    lookup_field = 'uuid'

    def filter_queryset(self, queryset):
        """
        This ensures that user's can only see trips they are involved with.
        """
        return queryset.filter(
            users__sub=header_to_sub(
                self.request.META.get('HTTP_AUTHORIZATION')))
