from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.conf import settings
from django.core.files.storage import FileSystemStorage



class Sign:
    def __init__(self):
        pass
    
    def signup(request): #회원가입
        url = Sign.simple_upload(request)
        member_id = request.POST['member_id']
        name = request.POST['name']
        pwd = request.POST['pwd']
        year = request.POST['year']
        month = request.POST['month']
        day = request.POST['day']
        birth ="{}년 {}월 {}일".format(year,month,day)
        sex = request.POST['sex']
        animal = request.POST['animal']
        phone = request.POST['phone']
        print(request.POST['addr_city'])
        addr_city = request.POST['addr_city']
        addr_gu = request.POST['addr_gu']
        profile = 0
        if request.POST['profile'] == "공개" :
            profile = 1
        user = User.objects.create(member_id = member_id, name = name, pwd = pwd, phone = phone, birth = birth,sex =sex,animal=animal,addr_city=addr_city,addr_gu=addr_gu,profile=profile,img_url = url )
        
        return 'add user okay'

    def signin(request): #로그인
        id = request.POST['member_id']
        pwd = request.POST['pwd']
        users = User.objects.filter(member_id = id)
        member_id = 'unknown'
        result = 'fail'
        if users is not None:
            for user in users:
                if id == user.member_id and pwd == user.pwd:
                    member_id = id
                    result = 'success'
                Sign.save_session(request, member_id, result)
                return redirect('index')
        return render(request, 'accounts/member.html',{'result':result})


    def save_session(request, member_id, result):
        request.session['member_id'] = member_id
        request.session['result'] = result
        print(result)
        print(request.session['member_id'])


    @csrf_exempt
    def show_list(request):
        id = request.session['member_id']
        this_member = User.objects.filter(member_id = id)
        addr_gu = None
        addr_city = None
        profile = None
        if this_member is not None:
            for member in this_member:
                profile = member.profile
                addr_city = member.addr_city
                addr_gu = member.addr_gu
        profile_members = User.objects.filter(profile = 1, addr_gu = addr_gu, addr_city = addr_city)
        return render(request, "accounts/board.html",{"users":profile_members,"this_member":this_member})
    
    def simple_upload(request):
        if request.method == 'POST' and request.FILES['imgFile']:
            member_id = request.POST['member_id']
            myfile = request.FILES['imgFile']
            fs = FileSystemStorage()
            filename = fs.save(myfile.name, myfile)
            uploaded_file_url = fs.url(filename)
        return uploaded_file_url

    def get_img(request):
        member_id = request.session['member_id']
        members = User.objects.filter(member_id = member_id)
        for member in members:
            img_url = member.img_url 
        return img_url

    def check_id(request):
        member_id = request.POST['member_id']
        users = User.objects.filter(member_id = member_id)
        for user in users:
            if user.member_id!=None:
                return "fail"
        return "success"

    def return_user(request):
        member_id = request.session['member_id']
        users = User.objects.filter(member_id = member_id)
        return users

    def update_user(request):
        member_id = request.session['member_id']
        pwd = request.POST['pwd']
        name = request.POST['name']
        animal = request.POST['animal']
        addr_city = request.POST['addr_city']
        addr_gu = request.POST['addr_gu']
        profile = 0
        if request.POST['profile']== "공개" :
            profile = 1
        img_url = Sign.simple_upload(request)
        if img_url != None:
            User.objects.filter(member_id = member_id).update(pwd = pwd, name = name, animal= animal, addr_city = addr_city, addr_gu=addr_gu, profile=profile, img_url= img_url)
        else : 
            User.objects.filter(member_id = member_id).update(pwd = pwd, name = name, animal= animal, addr_city = addr_city, addr_gu=addr_gu, profile=profile)
        users = User.objects.filter(member_id = member_id)
        return users

