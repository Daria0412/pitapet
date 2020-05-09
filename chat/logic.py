from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.conf import settings

class Chat_logic: 
    def __init__(self):
        pass

    @csrf_exempt
    def show_list(request,id):
        this_member = User.objects.filter(member_id = id)
        addr_gu = None
        addr_city = None
        if this_member is not None:
            for member in this_member:
                addr_city = member.addr_city
                addr_gu = member.addr_gu
        profile_members = User.objects.filter(profile = 1, addr_gu = addr_gu, addr_city = addr_city)
        return render(request, "chat/test.html",{"users":profile_members})
    
    def mkroom(request):
        person1 = request.POST['member_id']
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