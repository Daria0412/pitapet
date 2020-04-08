from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from .logic import *
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request, 'accounts/index.html')

@csrf_exempt
def signup(request):
    if request.method == "POST":
        print(Sign.signup(request))
        return render(request, 'accounts/test.html')
    return render(request, 'accounts/signup.html')

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