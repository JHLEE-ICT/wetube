import mongoose from "mongoose";

//schema는 일종의 형태를 의미
const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
