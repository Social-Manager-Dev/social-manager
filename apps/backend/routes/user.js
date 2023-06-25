import express from "express";

const router = express.Router();

// Home page route.
router.get("/get-user", function (req, res) {
  console.log(req.query);
  res.send(`Access Key: ${req.query}`);
});

// About page route.
router.get("/get-details", function (req, res) {
  res.send("About this wiki");
});

export default router;
