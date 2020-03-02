import mongoose from "mongoose";

//database가 어디있는지 알려주는 것
mongoose.connect("mongodb://localhost:27017/we-tube", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//mongoDB와의 연결을 저장
const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection: ${error}`);

//성공여부 확인
db.once("open", handleOpen);
db.on("error", handleError);
