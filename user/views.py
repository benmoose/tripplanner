from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework import generics

from .serializers import UserSerializer


class UserDetail(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.filter(is_active=True)

    def get_object(self):
        """This filters to the current user."""
        queryset = self.queryset.filter(username=self.request.user.username)
        return get_object_or_404(queryset)
