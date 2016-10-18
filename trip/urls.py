from django.conf.urls import url

from .views import *


app_name = 'trip'

urlpatterns = [
    url(r'^$', Dashboard.as_view(), name='dashboard'),
]
