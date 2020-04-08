from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponse, JsonResponse
from .models import *


class Sign:
    def __init__(self):
        pass
    
    def signup(request): #회원가입
        member_id = request.POST['member_id']
        name = request.POST['name']
        pwd = request.POST['pwd']
        year = request.POST['year']
        month = request.POST['month']
        day = request.POST['day']
        birth ="{}-{}-{} 00:00:00".format(year,month,day)
        sex = request.POST['sex']
        animal = request.POST['animal']
        print(request.POST['addr_city'])
        addr_city = request.POST['addr_city']
        addr_gu = request.POST['addr_gu']
        profile = 0
        if request.POST['profile'] == "공개" :
            profile = 1
        user = User.objects.create(member_id = member_id, name = name, pwd = pwd, birth = birth,sex =sex,animal=animal,addr_city=addr_city,addr_gu=addr_gu,profile=profile )
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
        return render(request, 'accounts/logout.html')

    def save_session(request, member_id, result):
        request.session['member_id'] = member_id
        request.session['result'] = result
