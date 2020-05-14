from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from .logic import *
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.core.files.storage import FileSystemStorage

def index(request):
    if len(request.session.keys()) > 0:
        return render(request, 'accounts/index.html',{'img_url':Sign.get_img(request)})
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
    request.session.clear()
    return redirect('index')

def member(request):
    return render(request, 'accounts/member.html')

def worklist(request):
    if len(request.session.keys()) > 0:
        return Sign.show_list(request)
    return redirect('member')

def mypage(request):
    if len(request.session.keys()) > 0:
        if request.method == 'POST':
            return render(request, 'accounts/mypage.html',{'users':Sign.update_user(request),'result':'okay'})
        return render(request, 'accounts/mypage.html',{'users':Sign.return_user(request)})
    return redirect('member')

def test(request):
    return render(request, 'accounts/test.html')

def test2(request):
    if request.method=='POST':
        return render(request,'accounts/test2.html',{'member_id':request.POST['member_id'],'result':Sign.check_id(request)})
    return render(request, 'accounts/test2.html')
    
    
def check_id(request):
    if request.method=='POST':
        return render(request,'accounts/checkID.html',{'member_id':request.POST['member_id'],'result':Sign.check_id(request)})
    return render(request, 'accounts/checkID.html')
    