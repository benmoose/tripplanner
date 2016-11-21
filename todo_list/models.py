from django.db import models

from _common.models.mixins.mixins import TimeStampedModel, CompletableModel

from trip.models import Trip


class TodoList(TimeStampedModel):
    """This model represents a single todo-list for a single trip."""
    trip = models.OneToOneField(Trip)

    def get_todos(self):
        return TodoListItem.objects.filter(todo_list=self)

    def __str__(self):
        return '{} Todo List'.format(self.trip)


class TodoListItem(TimeStampedModel,
                   CompletableModel):
    """This model represents a single item in a todo-list."""
    todo_list = models.ForeignKey(TodoList)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title
