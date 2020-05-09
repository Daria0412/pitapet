
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from .logic import *

def main(request):
    return render(request, 'chat/index.html', {})

def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

def test(request):
    return Chat_logic.show_list(request,"test1")

def mkroom(request):
    room_id = str((Chat_logic.mkroom(request)))
    return redirect("/chat/"+room_id+"/")