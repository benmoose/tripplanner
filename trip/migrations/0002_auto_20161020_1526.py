# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-20 15:26
from __future__ import unicode_literals

from django.db import migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='content',
            field=redactor.fields.RedactorField(blank=True),
        ),
    ]