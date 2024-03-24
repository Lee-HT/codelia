# 블로그 용 FrontEnd

### 개인 프로젝트

### 배포 URL

#### https://lee-ht.github.io/codelia_react/

## 개발 환경

### VSCODE

### Node js 20.9.0

### React 18.2.0

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

## Language

### i18next

### Translation