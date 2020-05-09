from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    # url(r'^$', views.main, name='main'),
    path('test/',views.test, name = "test"),
    path('mkroom/', views.mkroom, name='mkroom'),
    url(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
]