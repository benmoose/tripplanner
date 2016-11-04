from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .utility.jwt_authentication import header_to_sub
from .models import UserJWT
from .serializers import UserJWTSerializer


class GetOrCreateUserJWT(APIView):
    serializer_class = UserJWTSerializer

    def get(self, request, format=None):
        print('GetOrCreate.create()')
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        sub = header_to_sub(auth_header)
        _, created = UserJWT.objects.get_or_create(sub=sub)
        if created:
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_200_OK)
