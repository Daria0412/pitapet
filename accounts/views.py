from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from .logic import *
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.core.files.storage import FileSystemStorage

def index(request):
    return render(request, 'accounts/index.html')

@csrf_exempt
def signup(request):
    if request.method == "POST":
        print(Sign.signup(request))
        return render(request, 'accounts/member.html')
    return render(request, 'accounts/member.html')

#@login_required
@csrf_exempt
def signin(request):
    if request.method == "POST":
        return Sign.signin(request)#session
    return render(request, 'accounts/signin.html')

def logout(request):
    if request.method == "POST": 
        del request.session['member_id'] 
    return render(request, 'accounts/logout.html')

def member(request):
    return render(request, 'accounts/member.html')

def worklist(request):
    return Sign.show_list(request)

def mypage(request):
    return render(request, 'accounts/mypage.html')

