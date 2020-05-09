from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('chatroom/', views.chatroom, name='chatroom'),
    url(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
]