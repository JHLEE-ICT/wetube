//init.js에 application을 호출하고 싶을 때

//default로 import 했을 때
import app from "./app";
//db와의 연결
import "./db";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
