import express from "express";
import { request } from "express";
// import UserAccessKey from "../models/UserAccessKey";
import axios from "axios";

const router = express.Router();

// Home page route.
router.get("/get-user-code", async function (req, res) {
  console.log(req.query.code);

  axios({
    method: "post",
    url: "https://api.instagram.com/oauth/access_token",
    data: {
      client_id: "785166699786224",
      client_secret: "c85620d91666afed085eab5e66a0dc1f",
      grant_type: "authorization_code",
      redirect_uri:
        "https://kullaj-social-media.onrender.com/users/get-user-token",
      code: req.query.code,
    },
  }).catch((err) => console.log(err));

  // axios
  //   .post("https://api.instagram.com/oauth/access_token", {
  //     client_id: "785166699786224",
  //     client_secret: "c85620d91666afed085eab5e66a0dc1f",
  //     grant_type: "authorization_code",
  //     redirect_uri:
  //       "https://kullaj-social-media.onrender.com/users/get-user-token",
  //     code: req.query.code,
  //   })
  //   .catch((err) => console.log(err));

  // const newAccessKey = new UserAccessKey({
  //   access_key: 'hi'
  // })

  // newAccessKey.save();
});

router.get("/get-user-token", function (req, res) {
  console.log(req);
  axios
    .get(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=c85620d91666afed085eab5e66a0dc1f&access_token=${req.query.code}`
    )
    .then((response) => {
      res.send(
        `Access Key: ${response.access_token} and expires in ${
          response.expires_in / 86400
        } days`
      );
    })
    .catch((err) => {
      res.send(err);
    });
});

// About page route.
router.get("/get-details", function (req, res) {
  res.send("About this wiki");
});

export default router;
