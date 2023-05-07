const express = require("express");
const router = express.Router();

// Home page route.
router.get("/create-post", function (req, res) {
  res.send("Create a post");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;