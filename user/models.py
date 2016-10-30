from django.contrib.auth.models import User

from oauth2_provider.models import AccessToken
from rest_framework_social_oauth2.backends import DjangoOAuth2


class TripPlannerOAuth2(DjangoOAuth2):
    def get_user_details(self, response):
        if response.get(self.ID_KEY, None):
            user = User.objects.get(pk=response[self.ID_KEY])
            return {'username': user.username,
                    'email': user.email,
                    'fullname': user.get_full_name(),
                    'first_name': user.first_name,
                    'last_name': user.last_name
                    }
        return {}

    def user_data(self, access_token, *args, **kwargs):
        try:
            user_id = AccessToken.objects.get(token=access_token).user.pk
            return {self.ID_KEY: user_id}
        except AccessToken.DoesNotExist:
            return None

    def do_auth(self, access_token, *args, **kwargs):
        """Finish the auth process once the access_token was retrieved"""
        data = self.user_data(access_token, *args, **kwargs)
        response = kwargs.get('response') or {}
        response.update(data or {})
        kwargs.update({'response': response, 'backend': self})
        if response.get(self.ID_KEY, None):
            user = User.objects.get(pk=response[self.ID_KEY])
            return user
        else:
            return None
