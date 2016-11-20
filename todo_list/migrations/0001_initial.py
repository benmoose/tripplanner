# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-20 15:39
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('trip', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TodoList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('trip', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='trip.Trip')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TodoListItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('is_complete', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('todo_list', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todo_list.TodoList')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]