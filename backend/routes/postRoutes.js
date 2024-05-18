import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { createPost, getPost, deletePost, likeUnlikePost, replyToPost, getFeedPost, getUserFeed } from "../controllers/postControllers.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPost);
router.post("/create", protectRoute, createPost); // Route for creating a post
router.get("/:id", getPost);
router.get("/user/:username", getUserFeed);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);

export default router;
