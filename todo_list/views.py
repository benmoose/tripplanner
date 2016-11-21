from rest_framework import generics

from _common.models.abstract.api import ProtectedApiView
from user_jwt.utility.jwt_authentication import header_to_sub
from trip.models import Trip
from .serializer import TodoList as _TodoList


# class TodoListDetail(ProtectedApiView, generics.RetrieveAPIView):
#     serializer_class = _TodoList
#
#     def get_object(self):
#         """
#         This ensures that user's can only see todo-list of trips they are
#         involved with.
#         """
#         users_trip = Trip.objects.get(users)
#         queryset = _TodoList.objects.filter(active=True)
#         instance = queryset.get(
#             trip__users__sub__contains=header_to_sub(
#                 self.request.META.get('HTTP_AUTHORIZATION')))
#         return instance
