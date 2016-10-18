from django.db import models

from _common.models.abstract_models import TimeStampedModel
from trip.models import Trip

from .constants.choices import TODOLIST_TYPES


class TodoList(TimeStampedModel):
    """This model represents a single BucketList for a users trip"""
    trip = models.OneToOneField(Trip)


class TodoListItem(TimeStampedModel):
    """This model represents a single item in a BucketList"""
    todo_list = models.ForeignKey(TodoList)
    title = models.CharField(max_length=200)
    description = models.TextField()
    type = models.PositiveSmallIntegerField(choices=TODOLIST_TYPES, default=0)
    completed = models.BooleanField(default=False)

    def set_completed(self):
        self.completed = True
        self.save()

    def set_uncompleted(self):
        self.completed = False
        self.save()

    def __str__(self):
        return self.title
