import express from "express";
import {loginInstagram, instagramUserInfo, getUserInsights, CreatePost, SchedulePost} from '../controller/instagram.js'

const router = express.Router();

// Instagram auth routes 
router.get("/signin-instagram", loginInstagram);

// Instagram action routes 
router.get("/get-instagram-user-info", instagramUserInfo);

router.get("/get-instagram-user-insights", getUserInsights);

router.post("/create-post", CreatePost);

router.post("/schedule-post", SchedulePost);

router.post("/get-instagram-user-info", function (req, res) {
  res.send("Create a post");
});

export default router;
