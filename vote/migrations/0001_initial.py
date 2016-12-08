# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-08 13:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('votes', models.PositiveIntegerField(default=0, editable=False)),
                ('emoji', models.CharField(choices=[('U+1F600', 'Smile'), ('U+1F60D', 'Heart Face'), ('U+1F608', 'Evil Face'), ('U+1F44D', 'Thumbs Up'), ('U+1F44E', 'Thumbs Down'), ('U+2764', 'Heart'), ('U+1F389', 'Party')], max_length=4)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
