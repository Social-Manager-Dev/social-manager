import express from "express";
import { UserAccessKey } from "../models/UserAccessKey";
import axios from 'axios'

const router = express.Router();

// Home page route.
router.get("/get-user", function (req, res) {
  console.log(req.query.code);
  
  axios.get(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=c85620d91666afed085eab5e66a0dc1f&access_token=${req.query.code}`).then((response)=>{
    res.send(`Access Key: ${response.access_token} and expires in ${response.expires_in/86400} days`);
  })

  // const newAccessKey = new UserAccessKey({
  //   access_key: 'hi'
  // })

  // newAccessKey.save();
});

// About page route.
router.get("/get-details", function (req, res) {
  res.send("About this wiki");
});

export default router;
