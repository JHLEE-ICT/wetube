import mongoose from "mongoose";
import dotenv from "dotenv";
//dotenv.config라는 함수로 .env 파일 안에 있는 정보를 불러올 수 있다
dotenv.config();

//database가 어디있는지 알려주는 것
mongoose.connect(process.env.MONGO_URL_PROD, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//mongoDB와의 연결을 저장
const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection: ${error}`);

//성공여부 확인
db.once("open", handleOpen);
db.on("error", handleError);
