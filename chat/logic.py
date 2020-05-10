from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.conf import settings

class Chat_logic: 
    def __init__(self):
        pass

    def chatroom(request):
            person1 = request.session['member_id']
            person2 = request.POST['person']
            room_id = None
            if person1 > person2:
                temp = person1
                person1 = person2
                person2 = temp
            Chat.objects.get_or_create(person1=person1, person2=person2)
            rooms = Chat.objects.filter(person1=person1, person2=person2)
            print(rooms)
            for room in rooms:
                room_id = room.room_id
            return room_id

 