from django.test import TestCase
from django.utils import timezone
from django.db.utils import IntegrityError

from user_jwt.models import UserJWT
from .models import Trip, TripLocation


class TestTrip(TestCase):
    def setUp(self):
        self.user_jwt = UserJWT.objects.create(sub='test.jwt.test')
        self.trip = Trip.objects.create(title='test trip')
        self.trip.users.add(self.user_jwt)

    def test_get_absolute_url(self):
        url = self.trip.get_absolute_url()
        uuid = self.trip.uuid

        self.assertEqual(url, '/{}'.format(uuid))


class TestTripLocation(TestCase):
    def setUp(self):
        self.user_jwt = UserJWT.objects.create(sub='test.jwt.test')
        self.trip = Trip.objects.create(title='test trip')
        self.trip.users.add(self.user_jwt)

    def test_unique_arrive_date(self):
        now = timezone.now()

        with self.assertRaises(IntegrityError):
            TripLocation.objects.create(trip=self.trip, title='loc 1', arrive=now)
            TripLocation.objects.create(trip=self.trip, title='loc 2', arrive=now)
