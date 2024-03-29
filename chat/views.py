
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from .logic import *

def main(request):
    if len(request.session.keys()) > 0:
        return Chat_logic.get_chatlist(request)
    return redirect('member')


def room(request, room_name):
    messages = Chat_logic.show_messages(room_name)
    person = Chat_logic.get_profile(request, room_name)
    request.session['room_name']=room_name
    print(person)
    print(person.img_url)
    return render(request, 'chat/room.html', {'room_name_json': mark_safe(json.dumps(room_name)),'messages':messages,"room_id":room_name,"person":person})

def chatroom(request):
    request.session['person'] = request.POST['person']
    return redirect("/chat/cheatpage/")

def chatroom1(request):
    room_id = str((Chat_logic.chatroom(request)))
    return redirect("/chat/"+room_id+"/",{"room_id",room_id})

def dbconnect(request):
    room_id = Chat_logic.dbconnect(request)
    return redirect("/chat/"+room_id+"/",{"room_id",room_id})

def out(request):
    print(Chat_logic.out(request))
    return redirect("/chat/")

def cheatpage(request):
    return render(request,'chat/cheat.html')

def cheat(request):
    room_id = str((Chat_logic.chatroom1(request)))
    print(room_id)
    return redirect("/chat/"+room_id+"/",{"room_id",room_id})

def history(request):
    room_name = request.session['room_name']
    messages = Chat_logic.show_messages(room_name)
    person = Chat_logic.get_profile(request, room_name)
    return render(request, 'chat/history.html', {'room_name_json': mark_safe(json.dumps(room_name)),'messages':messages,"room_id":room_name,"person":person})
