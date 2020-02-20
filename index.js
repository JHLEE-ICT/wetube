//require : node_modules에서 찾는 것(import)
const express = require("express");
//express 실행
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  //응답하려면 res.send
  //웹싸이트처럼 동작하려면 html, css파일ㅇ르 send해줘야한다
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

//PORT에 listen을 하고 listen을 하기 시작하면 handleListeneing 함수가 실행됨
app.listen(PORT, handleListening);
