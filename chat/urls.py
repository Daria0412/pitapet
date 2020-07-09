from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name = "main"),
    path('chatroom/', views.chatroom, name='chatroom'),
    path('chatroom1/', views.chatroom1, name='chatroom1'),
    path('dbconnect/', views.dbconnect, name='dbconnect'),
    path('out/', views.out, name = 'out'),
    path('cheat/', views.cheat, name = 'cheat'),
    path('history/',views.history, name='history'),
    path('cheatpage/', views.cheatpage, name = "cheatpage"),
    url(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
]