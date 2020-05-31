from django.conf import settings
from django.db import models
from django.utils import timezone


class User(models.Model):
    member_id = models.CharField(db_column='member_id',primary_key=True,max_length=200,blank=False)
    pwd = models.CharField(db_column='pwd',max_length=200,blank=False)
    name = models.CharField(db_column='name',max_length=200,blank=False)
    phone = models.CharField(db_column='phone',max_length=200,blank=False)
    sex= models.CharField(db_column='sex',max_length=60,blank=False)
    animal = models.CharField(db_column='animal',max_length=300,blank=False)
    addr_city = models.CharField(db_column='addr_city',max_length=150,blank=False)
    addr_gu = models.CharField(db_column='addr_gu',max_length=100,blank=False)
    profile = models.IntegerField(db_column='profile',blank=False)
    img_url = models.CharField(db_column='img_url',max_length=100,blank=False)

    class Meta:
        managed = False
        db_table = 'pit_user'

    def publish(self):
        self.save()

    def __str__(self):
        return self.id
