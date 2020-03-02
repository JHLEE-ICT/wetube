//Video 형태를 정의
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  //비디오 자체를 저장하면 database가 무거워지기 때문에 링크를 저장
  fileUrl: {
    type: String,
    //fileUrl 값이 없는 Video를 생성하려 한다면 이 에러 메시지를 표현
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref="Comment"
    }
  ]
});

//정의를 통해 실제 document를 만듬
const model = mongoose.model("Video", VideoSchema);
export default model;
