jQuery(document).ready(function ($) {
  var $form_modal = $('.user-modal'),
  $form_login = $form_modal.find('#login'),
  $form_signup = $form_modal.find('#signup'),
  $form_forgot_password = $form_modal.find('#reset-password'),
  $form_modal_tab = $('.switcher'),
  $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
  $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
  $forgot_password_link = $form_login.find('.form-bottom-message a'),
  $back_to_login_link = $form_forgot_password.find('.form-bottom-message a'),
  $main_nav = $('.main-nav');
  var password =  $form_signup.find("#pwd").val();
  var repeatPassword = $form_signup.find("#repeatPwd").val();

//  //open modal
//  $main_nav.on('click', function (event) {

//   if ($(event.target).is($main_nav)) {
//     // on mobile open the submenu
//     $(this).children('ul').toggleClass('is-visible');
//   } else {
//     // on mobile close submenu
//     $main_nav.children('ul').removeClass('is-visible');
//     //show modal layer
//     $form_modal.addClass('is-visible');
//     //show the selected form
//     $(event.target).is('.signup') ? signup_selected() : login_selected();
//   }

// });

$form_modal.addClass('is-visible');
//show the selected form
login_selected();


  // $('.user-modal').on('click', function (event) {
  //   if ($(event.target).is($form_modal) || $(event.target).is('.close-form')) {
  //     $form_modal.removeClass('is-visible');
  //   }
  // });
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $form_modal.removeClass('is-visible');
    }
  });

  //switch from a tab to another
  $form_modal_tab.on('click', function (event) {
    event.preventDefault();
    $(event.target).is($tab_login) ? login_selected() : signup_selected();
  });

  //hide or show password
  $('.hide-password').on('click', function () {
    var $this = $(this),
    $password_field = $this.prev('input');

    'password' == $password_field.attr('type') ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    'Show' == $this.text() ? $this.text('Hide') : $this.text('Show');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

  //show forgot-password form 
  $forgot_password_link.on('click', function (event) {
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on('click', function (event) {
    event.preventDefault();
    login_selected();
  });

  function login_selected() {
    $form_login.addClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.addClass('selected');
    $tab_signup.removeClass('selected');
  }

  function signup_selected() {
    $form_login.removeClass('is-selected');
    $form_signup.addClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.removeClass('selected');
    $tab_signup.addClass('selected');
  }

  function forgot_password_selected() {
    $form_login.removeClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.addClass('is-selected');
  }

  //REMOVE THIS - it's just to show error messages 
  // $form_login.find('input[name="submit"]').on('click', function (event) {
  //   event.preventDefault();
  //   $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
  // });

   if(password != repeatPassword){
    $form_signup.find("#pwd").on('click', function (event) {
      event.preventDefault();
      $form_signup.find("#repeatPwd").toggleClass('has-error').next('span').toggleClass('is-visible');
      alert(password + " " + repeatPassword);
    });
   }

  if (!Modernizr.input.placeholder) {
    $('[placeholder]').focus(function () {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    }).blur(function () {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function () {
      $(this).find('[placeholder]').each(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      });
    });
  }
});

function appendYear(){
  var date=new Date();
  var year=date.getFullYear();
  var selectValue=document.getElementById("year");
  var optionIndex=0;
 
  for(var i=year-90; i<=year; i++){
    selectValue.add(new Option(i + "년", i), optionIndex++);
  }
}

function appendMonth(){
var selectValue=document.getElementById("month"); 
var optionIndex=0;

for(var i=1; i<=12; i++){
    selectValue.add(new Option(i + "월", i), optionIndex++);
}
}

function appendDay(){
var selectValue=document.getElementById("day");
var optionIndex=0;

for(var i=1; i<=31; i++){
          selectValue.add(new Option(i + "일", i), optionIndex++);
  }
}

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

  if(e.value == "seoul") var d = address_seoul;
  else if(e.value == "busan") var d = address_busan;
  else if(e.value == "daegu") var d = address_daegu;
  else if(e.value == "incheon") var d = address_incheon;
  else if(e.value == "gwangju") var d = address_gwangju;
  else if(e.value == "daejeon") var d = address_daejeon;
  else if(e.value == "ulsan") var d = address_ulsan;
  else if(e.value == "gyeonggi") var d = address_gyeonggi;
  else if(e.value == "gangwon") var d = address_gangwon;
  else if(e.value == "chungcheongBugdo") var d = address_chungcheongBugdo;
  else if(e.value == "chungcheongNamdo") var d = address_chungcheongNamdo;
  else if(e.value == "sejong") var d = address_sejong;
  else if(e.value == "jeonlaBugdo") var d = address_jeonlaBugdo;
  else if(e.value == "jeonlaNamdo") var d = address_jeonlaNamdo;
  else if(e.value == "gyeongsangBugdo") var d = address_gyeongsangBugdo;
  else if(e.value == "gyeongsangNamdo") var d = address_gyeongsangNamdo;
  else if(e.value == "jeju") var d = address_jeju;

  target.options.length = 0;

  for (x in d){
      var opt = document.createElement("option");
      opt.value = d[x];
      opt.innerHTML = d[x];
      target.appendChild(opt);
  }
}

jQuery.fn.putCursorAtEnd = function () {
  return this.each(function () {
    // If this function exists...
    if (this.setSelectionRange) {
      // ... then use it (Doesn't work in IE)
      // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      var len = $(this).val().length * 2;
      this.setSelectionRange(len, len);
    } else {
      // ... otherwise replace the contents with itself
      // (Doesn't work in Google Chrome)
      $(this).val($(this).val());
    }
  });
};

/* 아이디 중복 확인 */

/* 로그인 유효성 체크 */
function check(){ 
  var id = document.getElementById("member_id");
  var pwd = document.getElementById("pwd");

  if(id.value == ""){
    Swal.fire({
      icon: 'error',
      title: '아이디 오류',
      text: '아이디를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    id.focus();
    return false;
  }

  if(pwd.value == ""){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 오류',
      text: '비밀번호를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    pwd.focus();
    return false;
  }
};

/* 회원가입 유효성 검사 */
function checkAll(){ 
  var sign = document.signup;

  if (sign.member_id.value == ""){
    Swal.fire({
      icon: 'error',
      title: '아이디 오류',
      text: '아이디를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.member_id.focus();
    }, 0);
    return false;
  }

  if(sign.pwd.value == ""){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 오류',
      text: '비밀번호를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.pwd.focus();
    }, 0);
    return false;
  }

  if(sign.repeatPwd.value == ""){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 재확인 오류',
      text: '비밀번호 재확인을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.repeatPwd.focus();
    }, 0);
    return false;
  }

  /* 비밀번호 일치 */
  if(sign.pwd.value != sign.repeatPwd.value){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 재확인 오류',
      text: '비밀번호가 틀렸습니다. 다시 한 번 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  if(sign.name.value == ""){
    Swal.fire({
      icon: 'error',
      title: '성함 오류',
      text: '성함을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.name.focus();
    }, 0);
    return false;
  }

  /* 생년월일 유효성 */
  var yearIdx = $("#year option").index($("#year option:selected"));
  console.log(yearIdx);

  if(yearIdx == 91){
    Swal.fire({
      icon: 'error',
      title: '생년월일 오류',
      text: '태어나신 년도를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  var monthIdx = $("#month option").index($("#month option:selected"));
  console.log(monthIdx);

  if(monthIdx == 12){
    Swal.fire({
      icon: 'error',
      title: '생년월일 오류',
      text: '태어나신 월을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  var dayIdx = $("#day option").index($("#day option:selected"));
  console.log(dayIdx);

  if(dayIdx == 31){
    Swal.fire({
      icon: 'error',
      title: '생년월일 오류',
      text: '태어나신 날짜를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  if(sign.animal.value == ""){
    Swal.fire({
      icon: 'error',
      title: '애완동물 오류',
      text: '키우고 계시는 애완동물을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.animal.focus();
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
    return false;
  }
  
 

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
  }
};