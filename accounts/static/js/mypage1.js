/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  })(jQuery); // End of use strict

// File Upload
$(document).ready(function () {
var fileTarget = $('.filebox .upload-hidden');
fileTarget.on('change', function () {
  if (window.FileReader) {
    var filename = $(this)[0].files[0].name;
  } else {
    var filename = $(this).val().split('/').pop().split('\\').pop();
  };
  
  $(this).siblings('.upload-name').val(filename);
});

var imgTarget = $('.preview-image .upload-hidden');

imgTarget.on('change', function () {
  var parent = $(this).parent();
  parent.children('.upload-display').remove();

  if (window.FileReader) {
    if (!$(this)[0].files[0].type.match(/image\//)) return;

    var reader = new FileReader();
    reader.onload = function (e) {
      var src = e.target.result;
      parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="' + src + '" class="upload-thumb"></div></div>');
    };
    reader.readAsDataURL($(this)[0].files[0]);
  } else {
    $(this)[0].select();
    $(this)[0].blur();
    var imgSrc = document.selection.createRange().text;
    parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

    var img = $(this).siblings('.upload-display').find('img');
    img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
  }
});
});

/* Birth */
function addressChange(e){
  // address list
  var address_seoul=["군이나 도를 선택해 주세요", "중구", "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구",
                      "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구",
                      "영등포구", "용산구", "은평구", "종로구", "중랑구"];
  var address_busan=["군이나 도를 선택해 주세요", "연제구", "강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구",
                      "수영구", "영도구", "중구", "해운대구", "기장군"];
  var address_daegu=["군이나 도를 선택해 주세요", "중구", "남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
  var address_incheon=["군이나 도를 선택해 주세요", "강동구", "계양구", "남구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"];
  var address_gwangju=["군이나 도를 선택해 주세요", "광산구", "남구", "동구", "북구", "서구"];
  var address_daejeon=["군이나 도를 선택해 주세요", "대덕구", "동구", "서구", "유성구", "중구"];
  var address_ulsan=["군이나 도를 선택해 주세요", "남구", "동구", "북구", "중구", "울주군"];
  var address_gyeonggi=["군이나 도를 선택해 주세요", "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시",
                      "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "여주시", "오산시", "용인시",
                      "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군",
                      "연천군"];
  var address_gangwon=["군이나 도를 선택해 주세요", "강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군",
                      "인제군", "정선군", "철원군", "평창군", "흥천군", "화천군", "횡성군"];
  var address_chungcheongBugdo=["군이나 도를 선택해 주세요", "제천시", "청주시", "충주시", "괴산국", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", 
                                  "진천군"];
  var address_chungcheongNamdo=["군이나 도를 선택해 주세요", "공주시", "계룡시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진시", "부여군", 
                               "서천군", "예산군", "청양군", "태안군", "흥성군"];
  var address_sejong=["군이나 도를 선택해 주세요", "반곡동", "소담동", "보람동", "대평동", "가람동", "한솔동", "나성동", "새롬동", "다정동", "어진동", "종촌동",
                      "고운동", "아름동", "도담동", "조치원읍", "연기면", "연동면", "부강면", "금남면", "장군면", "연서면", "전의면",
                      "전동면", "소정면"];
  var address_jeonlaBugdo=["군이나 도를 선택해 주세요", "군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군",
                          "임실군", "장수군", "진안군"];
  var address_jeonlaNamdo=["군이나 도를 선택해 주세요", "광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군",
                          "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];
  var address_gyeongsangBugdo=["군이나 도를 선택해 주세요", "경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "포항시", "고령군", "군위군",
                              "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"];
  var address_gyeongsangNamdo=["군이나 도를 선택해 주세요", "거제시", "김해시", "밀양시", "사천시", "양산시", "진주시", "창원시", "통영시", "거창군", "고성군", "남해군",
                              "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
  var address_jeju=["군이나 도를 선택해 주세요", "제주시", "서귀포시"];

  var target=document.getElementById("addr_gu");

  if(e.value == "서울특별시") var d = address_seoul;
  else if(e.value == "부산광역시") var d = address_busan;
  else if(e.value == "대구광역시") var d = address_daegu;
  else if(e.value == "인천광역시") var d = address_incheon;
  else if(e.value == "광주광역시") var d = address_gwangju;
  else if(e.value == "대전광역시") var d = address_daejeon;
  else if(e.value == "울산광역시") var d = address_ulsan;
  else if(e.value == "경기도") var d = address_gyeonggi;
  else if(e.value == "강원도") var d = address_gangwon;
  else if(e.value == "충청북도") var d = address_chungcheongBugdo;
  else if(e.value == "충청남도") var d = address_chungcheongNamdo;
  else if(e.value == "세종특별자치시") var d = address_sejong;
  else if(e.value == "전라북도") var d = address_jeonlaBugdo;
  else if(e.value == "전라남도") var d = address_jeonlaNamdo;
  else if(e.value == "경상북도") var d = address_gyeongsangBugdo;
  else if(e.value == "경상남도") var d = address_gyeongsangNamdo;
  else if(e.value == "제주특별자치시") var d = address_jeju;

  target.options.length = 0;

  for (x in d){
      var opt = document.createElement("option");
      opt.value = d[x];
      opt.innerHTML = d[x];
      target.appendChild(opt);
  }
}

/* Radio Box 값 가져오기 */
function sexChecked(){
  var sexChecked = $('input[name=sex]:checked').val();
  console.log(sexChecked);
}

/* 회원가입 유효성 검사 */
function checkAll(){ 
  var update = document.update;
  /* 이미지 업로드 유효성 검사 */
  var imgFile = $('#imgFile').val();
  var maxSize = 5 * 1024 * 1024;
  var fileSize;

  if($('#imgFile').val() == "") {
    Swal.fire({
      icon: 'error',
      title: '이미지 업로드 오류',
      text: '프로필로 설정하실 이미지를 업로드 해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    $("#imgFile").focus();
      return false;
  };

  if(update.pwd.value == ""){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 오류',
      text: '비밀번호를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      update.pwd.focus();
    }, 0);
    return false;
  }

  if(update.name.value == ""){
    Swal.fire({
      icon: 'error',
      title: '성함 오류',
      text: '성함을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      update.name.focus();
    }, 0);
    return false;
  }

  if(update.animal.value == ""){
    Swal.fire({
      icon: 'error',
      title: '애완동물 오류',
      text: '키우고 계시는 애완동물을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      update.animal.focus();
    }, 0);
    return false;
  }

  /* 셀렉트 박스 유효성 검사 */

  var cityIdx = $("#add_city option").index( $("#add_city option:selected") );
  console.log(cityIdx);

  if(cityIdx < 1){
    Swal.fire({
      icon: 'error',
      title: '사는 지역 오류',
      text: '사는 지역을 선택해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      update.addr_city.options[0].focus();
    }, 0);
    return false;
  }

  var guIdx = $("#addr_gu option").index( $("#addr_gu option:selected") );
  console.log(guIdx);

  if(guIdx < 1){
    Swal.fire({
      icon: 'error',
      title: '사는 군이나 도 오류',
      text: '사는 군이나 도를 선택해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      update.addr_city.options[0].focus();
    }, 0);
    return false;
  }
};