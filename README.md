# :hamster: Pit A Pet
반려동물을 기르는 사람들에게 도움이 되는 정보와 산책 메이트를 구할 수 있는 서비스를 제공하는 챗봇 프로그램

***
### 1. 페이지 구조

페이지 | 설명 
---|:---:
`index.html` | 메인 페이지 
`member.html` | 로그인 및 회원가입 페이지 
`board.html` | 산책 메이트 페이지 |
`mypage.html` | 마이 페이지 |

### 2. 데이터베이스 구조

#### table chat
```
create table chat (
	room_id int not null auto_increment primary key,
	person1 varchar(10) not null,
	person2 varchar(10) not null
);
```
#### table pit_user
```
create table pit_user (
  member_id varchar(20) not null primary key,
  pwd varchar(20) not null,
  name varchar(10) not null,
  birth varchar(40) not null,
  sex varchar(6) not null,
  animal varchar(30) not null,
  addr_city varchar(30) not null,
  addr_gu varchar(30) not null,
  profile boolean not null,
  img_url varchar(200) default null
);
```
