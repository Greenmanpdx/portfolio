# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-17 23:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='link',
            field=models.SlugField(),
        ),
    ]
