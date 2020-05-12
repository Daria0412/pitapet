# Generated by Django 2.2.12 on 2020-05-10 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('member_id', models.CharField(db_column='member_id', max_length=200, primary_key=True, serialize=False)),
                ('pwd', models.CharField(db_column='pwd', max_length=200)),
                ('name', models.CharField(db_column='name', max_length=200)),
                ('birth', models.CharField(db_column='birth', max_length=200)),
                ('sex', models.CharField(db_column='sex', max_length=60)),
                ('animal', models.CharField(db_column='animal', max_length=300)),
                ('addr_city', models.CharField(db_column='addr_city', max_length=150)),
                ('addr_gu', models.CharField(db_column='addr_gu', max_length=100)),
                ('profile', models.IntegerField(db_column='profile')),
                ('img_url', models.CharField(db_column='img_url', max_length=100)),
            ],
            options={
                'db_table': 'pit_user',
                'managed': False,
            },
        ),
    ]