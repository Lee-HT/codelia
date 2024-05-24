# 블로그 용 FrontEnd

### 개인 프로젝트

### 배포 URL (현재 종료)

#### https://lee-ht.github.io/codelia_react/

## 개발 환경

### VSCODE

### Node js 20.9.0

### React 18.2.0



## Posts CRD

#### 게시글의 기본적인 기능인 조회, 생성, 삭제 기능 구현

### 게시글 조회
![Post-View](.github/Images/post/codelia_post_view.png)

### 게시글 생성
![Post-Save](.github/Images/post/codelia_post_save.png)



## Authentication

### 구글과 네이버 두개의 로그인 방식을 제공합니다.

![Login-Page](.github/Images/authentication/codelia_login.png)

### 로그인 후 session storage 에 accessToken, cookie 에 refreshToken 저장

![Token-API](.github/Images/authentication/codelia_token.png)

#### accessToken 으로 유저 정보 요청 후 Context 에 저장

### 새로고침 또는 accessToken 만료 시 재 요청 로직 헤더에 작성

![Refresh-Token](.github/Images/authentication/codelia_refresh.png)

### 401 에러 시 토큰 재발급 후 재 요청

![Request-401](.github/Images/authentication/codelia_request.png)



## Pagination

### 현재 페이지와 총 페이지를 인자로 받아 limit 만큼의 인접한 페이지 넘버 출력

![Pagination-State](.github/Images/pagination/codelia_pagination_state.png)

### 버튼을 누르면 상위 컴포넌트의 현재 페이지 상태 변경

![Pagination-Style](.github/Images/pagination/codelia_pagination_style.png)



## Language

### i18next 을 이용한 다국어 처리

#### 헤더에 언어를 변경 할 수 있도록 메뉴 제공

#### 한글 메뉴

![i18n-kr](.github/Images/i18next/codelia_i18n_kr.png)

#### 영어 메뉴

![i18n-en](.github/Images/i18next/codelia_i18n_en.png)

### 구글 번역 API 를 이용한 게시글 내용 번역 기능

#### 번역 버튼을 이용해 자신의 게시글의 내용을 자신의 언어로 번역 가능

#### EX KR->EN

#### 번역 기능 사용 전
![Translation-Before](.github/Images/translation/codelia_translation_before.png)

#### 번역 기능 사용 후
![Translation-After](.github/Images/translation/codelia_translate_after.png)
