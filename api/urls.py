from django.conf.urls import url
from rest_framework.authtoken import views as authoken_views
from rest_framework.urlpatterns import format_suffix_patterns

from trip import views as trip_views
from user_jwt import views as user_jwt_views

from user_jwt.utility.jwt_authentication import requires_login


app_name = 'api'

urlpatterns = [
    url(r'^api-token-auth/?$', authoken_views.obtain_auth_token),

    url(r'^user/jwt/get-or-create/?$', requires_login(user_jwt_views.GetOrCreateUserJWT.as_view())),

    url(r'^trips/?$', requires_login(trip_views.TripList.as_view())),
    url(r'^trips/(?P<uuid>[\w-]+)/?$', requires_login(trip_views.TripDetail.as_view())),
]

urlpatterns = format_suffix_patterns(urlpatterns)
