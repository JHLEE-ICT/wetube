//init.js에 application을 호출하고 싶을 때

//default로 import 했을 때
import app from "./app";
//db와의 연결
import "./db";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
