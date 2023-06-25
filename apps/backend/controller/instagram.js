import asyncHandler from "express-async-handler"

export const loginInstagram = asyncHandler(async (req, res) => {
  // res.send("NOT IMPLEMENTED: Author list");
  res.redirect(`https://api.instagram.com/oauth/authorize?client_id=785166699786224&redirect_uri=https://social-manager-inky.vercel.app/&scope=user_profile,user_media&response_type=code`);
});
//IGQVJYdExPd0tUR1ZAEZAmFZAZAmxkRVV3M3RjdVZAhb1o3dlF4aGdKVnBNMlhkNFJSZA3BGTV93NU5oVDE2Y01iOUVObXNXeDVyUThBRG8tWjdacFBsWGdsVnJMLTRNNnJGeXpBWWc1OUFXR0dNaGFvTHdveAZDZD
export const instagramUserInfo = asyncHandler(async (req, res) => {
  res.send("NOT IMPLEMENTED: User data fetch");
});

export const getUserInsights = asyncHandler(async (req, res) => {
  res.send("NOT IMPLEMENTED: Getting the user insights");
});

export const CreatePost = asyncHandler(async (req, res) => {
  res.send("NOT IMPLEMENTED: Creating a post");
});

export const SchedulePost = asyncHandler(async (req, res) => {
  res.send("NOT IMPLEMENTED: Schedule the post");
});