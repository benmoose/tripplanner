from rest_framework import serializers

from .models import TodoList, TodoListItem


class TodoListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoListItem
        fields = ('title', 'is_complete', 'description',)


class TodoListSerializer(serializers.ModelSerializer):
    todos = TodoListItemSerializer(source='get_todos', many=True)

    class Meta:
        model = TodoList
        fields = ('todos',)
