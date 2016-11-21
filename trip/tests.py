from django.test import TestCase
from django.utils import timezone
from django.db.utils import IntegrityError

from user_jwt.models import UserJWT
from todo_list.models import TodoList
from .models import Trip, TripLocation


class TestTrip(TestCase):
    def setUp(self):
        # User 1
        self.user_jwt_1 = UserJWT.objects.create(sub='test1.jwt1.test1')
        self.trip_1 = Trip.objects.create(title='Trip 1')
        self.trip_1.users.add(self.user_jwt_1)
        self.todo_list_1 = TodoList.objects.create(trip=self.trip_1)

        # User 2
        self.user_jwt_2 = UserJWT.objects.create(sub='test2.jwt2.test2')
        self.trip_2 = Trip.objects.create(title='Trip 2')
        self.trip_2.users.add(self.user_jwt_2)
        self.todo_list_2 = TodoList.objects.create(trip=self.trip_2)

    def test_get_absolute_url(self):
        url = self.trip_1.get_absolute_url()
        uuid = self.trip_1.uuid

        self.assertEqual(url, '/{}'.format(uuid))

    def test_get_todo(self):
        todo_from_trip = self.trip_1.get_todo_list()
        self.assertEqual(self.todo_list_1, todo_from_trip)


class TestTripLocation(TestCase):
    def setUp(self):
        self.user_jwt = UserJWT.objects.create(sub='test.jwt.test')
        self.trip = Trip.objects.create(title='test trip')
        self.trip.users.add(self.user_jwt)

    def test_unique_arrive_date(self):
        now = timezone.now()

        with self.assertRaises(IntegrityError):
            TripLocation.objects.create(trip=self.trip, title='loc 1',
                                        arrive=now)
            TripLocation.objects.create(trip=self.trip, title='loc 2',
                                        arrive=now)
