import express from "express";

const router = express.Router();

// Instagram auth routes 
router.get("/dashboard", function (req, res) {
  res.send("Loged in!");
});

export default router;
