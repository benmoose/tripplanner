from django.conf.urls import url

from .views import *


app_name = 'trip'

urlpatterns = [
    url(r'^(?P<uuid>[36\w|-]+)/?$', Dashboard.as_view(), name='dashboard'),
    url(r'^$', NewTrip.as_view(), name='new_trip'),
]
