from django.contrib import admin

from .models import TodoList, TodoListItem


admin.site.register(TodoList)
admin.site.register(TodoListItem)
