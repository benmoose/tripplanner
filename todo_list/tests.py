from django.test import TestCase

from trip.models import Trip
from todo_list.models import TodoList, TodoListItem
from user_jwt.models import UserJWT


class TestTodoList(TestCase):
    def setUp(self):
        # User 1
        self.user_jwt_1 = UserJWT.objects.create(sub='test1.jwt1.test1')
        self.trip_1 = Trip.objects.create(title='Trip 1')
        self.trip_1.users.add(self.user_jwt_1)

        # User 2
        self.user_jwt_2 = UserJWT.objects.create(sub='test2.jwt2.test2')
        self.trip_2 = Trip.objects.create(title='Trip 2')
        self.trip_2.users.add(self.user_jwt_2)
