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
    var address_seoul=["중구", "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구",
                        "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구",
                        "영등포구", "용산구", "은평구", "종로구", "중랑구"];
    var address_busan=["연제구", "강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구",
                        "수영구", "영도구", "중구", "해운대구", "기장군"];
    var address_daegu=["중구", "남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
    var address_incheon=["강동구", "계양구", "남구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"];
    var address_gwangju=["광산구", "남구", "동구", "북구", "서구"];
    var address_daejeon=["대덕구", "동구", "서구", "유성구", "중구"];
    var address_ulsan=["남구", "동구", "북구", "중구", "울주군"];
    var address_gyeonggi=["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시",
                        "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "여주시", "오산시", "용인시",
                        "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군",
                        "연천군"];
    var address_gangwon=["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군",
                        "인제군", "정선군", "철원군", "평창군", "흥천군", "화천군", "횡성군"];
    var address_chungcheongBugdo=["제천시", "청주시", "충주시", "괴산국", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", 
                                    "진천군"];
    var address_chungcheongNamdo=["공주시", "계룡시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진시", "부여군", 
                                 "서천군", "예산군", "청양군", "태안군", "흥성군"];
    var address_sejong=["반곡동", "소담동", "보람동", "대평동", "가람동", "한솔동", "나성동", "새롬동", "다정동", "어진동", "종촌동",
                        "고운동", "아름동", "도담동", "조치원읍", "연기면", "연동면", "부강면", "금남면", "장군면", "연서면", "전의면",
                        "전동면", "소정면"];
    var address_jeonlaBugdo=["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군",
                            "임실군", "장수군", "진안군"];
    var address_jeonlaNamdo=["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군",
                            "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];
    var address_gyeongsangBugdo=["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "포항시", "고령군", "군위군",
                                "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"];
    var address_gyeongsangNamdo=["거제시", "김해시", "밀양시", "사천시", "양산시", "진주시", "창원시", "통영시", "거창군", "고성군", "남해군",
                                "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
    var address_jeju=["제주시", "서귀포시"];

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