//require : node_modules에서 찾는 것(import)
const express = require("express");
//express 실행
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

//PORT에 listen을 하고 listen을 하기 시작하면 handleListeneing 함수가 실행됨
app.listen(PORT, handleListening);
