const express = require("express");
const router = express.Router();

// Home page route.
router.get("/get-user", function (req, res) {
  res.send("Create a post");
});

// About page route.
router.get("/get-details", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;