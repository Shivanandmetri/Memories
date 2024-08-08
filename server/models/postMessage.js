import mongoose from "mongoose";
const d = new Date();
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: String,
    default: d.toLocaleString(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
