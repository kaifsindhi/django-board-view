# Generated by Django 4.1 on 2022-08-13 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BoardsApp', '0004_list_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='list',
            name='Description',
        ),
        migrations.AddField(
            model_name='card',
            name='Description',
            field=models.CharField(default=' ', max_length=1000),
            preserve_default=False,
        ),
    ]
