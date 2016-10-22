from django.shortcuts import Http404
from django.views.generic import TemplateView, DetailView
from django.shortcuts import render

from rest_framework import generics

from .serializers import TripSerializer
from .models import Trip


def redux(request):
    return render(request, 'redux.html', {})


class NewTrip(TemplateView):
    template_name = 'dashboard/select-trip.html'


class Dashboard(DetailView):
    model = Trip
    pk_url_kwarg = 'uuid'
    template_name = 'dashboard/my-trip.html'

    def get_queryset(self):
        return Trip.objects.filter(active=True).filter(
            users__username__contains=self.request.user.username)

    def get_object(self, queryset=None):
        if not queryset:
            queryset = self.get_queryset()
        try:
            return queryset.get(uuid=self.kwargs['uuid'])
        except:
            raise Http404


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
