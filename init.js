//init.js에 application을 호출하고 싶을 때

//default로 import 했을 때
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
//db와의 연결
import "./db";

//연결을 하고 model이 있다는 것을 인지하지 못하고 있기 때문에 아래 문장을 추가
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
