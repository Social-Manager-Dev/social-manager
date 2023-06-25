import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userAccessKey = new Schema(
  {
    access_key: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserAccessKey = mongoose.model("AccessKeysTemp", userAccessKey);

export default UserAccessKey;