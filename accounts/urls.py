from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('signin/',views.signin, name = 'signin'),
    path('logout/',views.logout, name = 'logout'),
    path('member/',views.member, name = 'member'),
    path('worklist/',views.worklist, name = 'worklist'),
    path('mypage/',views.mypage, name = 'mypage'),
    path('test/',views.mypage, name = 'test'),
]