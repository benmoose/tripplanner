from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics

from user_jwt.utility.jwt_authentication import requires_login


decorators = [requires_login]


@method_decorator(decorators, name='dispatch')
class ProtectedApiView(generics.GenericAPIView):
    class Meta:
        abstract = True
