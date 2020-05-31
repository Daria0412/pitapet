from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, JsonResponse
from .models import *
from django.db.models import Q
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
            return render(request,"fail.html")

    def dbconnect(request):
        if request.method == 'POST' and request.session['member_id']:
            room_id = request.POST['room_id']
            writer = request.session['member_id']
            message=request.POST['message']
            #hi = request.POST['hi']
            print(room_id, message)
            Message.objects.create(room_id = room_id, writer=writer, message=message)
            return room_id
        return "false"
    
    def show_messages(room_id):
        messages = Message.objects.filter(room_id = room_id).order_by("sent_at")
        return messages
 
    def get_chatlist(request):
        member_id = request.session['member_id']
        chatlists = Chat.objects.filter(person1=member_id)|Chat.objects.filter(person2=member_id)
        rooms = []
        userlist = []
        messages = []
        q=Q()
        for chatlist in chatlists:
            rooms.append(chatlist.room_id)
            if chatlist.person1 != request.session['member_id']:
                id = chatlist.person1
            else :
                id = chatlist.person2
            userlist.append(id)

        for room_id in rooms:
            message = Message.objects.filter(room_id=room_id).order_by('-sent_at')[0]
            messages.append(message)
        
        q=Q()
        for user in userlist:
            q.add(Q(member_id = user), q.OR)
        userlists = User.objects.filter(q)
        print("userlist:",userlist)
        print("userlists:", userlists)
        print("messages:", messages)
        print(chatlists)
        return render(request, 'chat/index.html',{'chatlists':chatlists, 'messages':messages, 'userlists': userlists})
    def out(request):
        room_id = request.POST['room_id']      
        Chat.objects.filter(room_id=room_id).delete()
        Message.objects.filter(room_id=room_id).delete() 
        return "delete"