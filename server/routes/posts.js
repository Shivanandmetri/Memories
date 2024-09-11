import express from "express";
// import posts from '../controllers/posts.js'
import {
  getPosts,
  createPosts,
  updatePost,
  likePost,
} from "../controllers/posts.js"; // in node we need to use .js
const router = express.Router();

router.get("/", getPosts);
router.post("/createpost", createPosts);
router.put("/:id", updatePost);
router.put("/like/:id", likePost);

export default router;
