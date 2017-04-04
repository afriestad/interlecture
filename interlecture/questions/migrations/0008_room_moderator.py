# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-04 12:36
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('questions', '0007_auto_20170314_1109'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='moderator',
            field=models.ManyToManyField(related_name='moderates', to=settings.AUTH_USER_MODEL),
        ),
    ]
