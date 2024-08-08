import express from "express";
// import posts from '../controllers/posts.js'
import { getPosts, createPosts } from "../controllers/posts.js"; // in node we need to use .js
const router = express.Router();

router.get("/", getPosts);
router.post("/createpost", createPosts);

export default router;
