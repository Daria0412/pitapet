
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from .logic import *

def main(request):
    return render(request, 'chat/index.html', {})

def room(request, room_name):
    messages = Chat_logic.show_messages(room_name)
    return render(request, 'chat/room.html', {'room_name_json': mark_safe(json.dumps(room_name)),'messages':messages,"room_id":room_name})

def chatroom(request):
    room_id = str((Chat_logic.chatroom(request)))
    return redirect("/chat/"+room_id+"/",{"room_id",room_id})

def dbconnect(request):
    print("--------------------------------------------------------")
    room_id = Chat_logic.dbconnect(request)
    print(room_id)
    return redirect("/chat/"+room_id+"/",{"room_id",room_id})

def test(request):
    return render(request, 'chat/fail.html', {})

def check_id(request):
    return Sign.check_id(request)