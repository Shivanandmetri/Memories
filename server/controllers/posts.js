// export default getPosts  import posts from '../controllers/posts.js'
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json({ newPost, message: "Post Created Successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Post with that id :${_id}`);
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  const post1 = await PostMessage.findById(_id);
  const post = { ...req.body, likeCount: req.body.likeCount + 1 };

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Post with that id :${_id}`);
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};
// #00A581
