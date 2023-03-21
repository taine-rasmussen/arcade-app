import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    stats: {
      type: Object,
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User