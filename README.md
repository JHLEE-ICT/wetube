# wetube

Cloning Youtube with Vanilla and NodeJS

## dependency란?

프로젝트가 실행되기위해서 필요한 것

서버생성-라우터생성-그에 대한 응답순으로 진행

`npm install nodemon -D`

"-D"란 프로젝트를 실행할 때에 필요하지 않고 프로그래머에게 필요한 것
즉 dependency에 포함하지 않고 설치할 때 사용

nomdemon은 파일을 수정하고 일일히 npm start를 입력해줄 필요 없이 서버 실행 후 파일 수정 저장하면 자동으로 서버를 재실행 하는 것

## Babel이란?

최신의 JavaScript를 예전의 JavaScript로 바꿔줌으로써 표준의 코드를 얻을 수 있다.

`npm install @babel/node`

## Middleware

요청과 응답사이

### 설치 방법

`npm install Middleware이름`

### 종류

- Morgan

logging(무슨일이 어디서 일어났는지 기록하는 것)에 도움을 주는 것

- Helmet

node.js 앱의 보안에 도움을 주는 것

- cookie-parser

서버가 유저로부터 받은 cookie를 이해하는 방법

session을 다루기 위해 cookie에 user정보를 저장할 것

- body-parser

서버가 유저로부터 받은 데이터를 이해하는 방법

데이터를 갖고있는 request object에 접근할 수 있게 하는 것

##MVC
*Model(data)
*View(how does the data look)
\*Controller(function that looks for data)
