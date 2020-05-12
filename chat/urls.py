from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('chatroom/', views.chatroom, name='chatroom'),
    path('dbconnect/', views.dbconnect, name='dbconnect'),
    path('test', views.test, name = "test"),
    url(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
    path('check/',views.check_id,name='check_id'),
]