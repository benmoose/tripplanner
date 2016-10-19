from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

from rest_framework import generics

from .serializers import TripSerializer
from .models import Trip


class Dashboard(TemplateView):
    template_name = 'pages/my-trip.html'


# API Views
# @method_decorator(login_required, name='dispatch')
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
