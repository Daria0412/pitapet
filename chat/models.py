from django.conf import settings
from django.db import models
from django.utils import timezone


class User(models.Model):
    member_id = models.CharField(db_column='member_id',primary_key=True,max_length=200,blank=False)
    pwd = models.CharField(db_column='pwd',max_length=200,blank=False)
    name = models.CharField(db_column='name',max_length=200,blank=False)
    birth = models.CharField(db_column='birth',max_length=200,blank=False)
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
        return self.member_id

class Chat(models.Model):
    room_id = models.AutoField(db_column='room_id',primary_key=True,max_length=200,blank=False)
    person1 = models.CharField(db_column='person1',max_length=200,blank=False)
    person2 = models.CharField(db_column='person2',max_length=200,blank=False)

    class Meta:
        managed = False
        db_table = 'chat'

    def publish(self):
        self.save()


class Message(models.Model):
    message_num = models.AutoField(db_column='message_num',primary_key=True,max_length=200,blank=False)
    room_id = models.IntegerField(db_column='room_id',blank=False)
    writer = models.CharField(db_column='writer',max_length=200,blank=False)
    message = models.CharField(db_column='message',max_length=200,blank=False)
    sent_at = models.DateTimeField(db_column='sent_at',auto_now_add=True)
    class Meta:
        managed = False
        db_table = 'message'

    def publish(self):
        self.save()

    def __str__(self):
        return self.message