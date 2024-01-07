import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
      required: [true, "Please provide your name"],
    },
    email: {
      type: String,
      default: "",
      required: [true, "Please provide your email"],
    },
    password: {
      type: String,
      default: "",
      required: [true, "Please enter your password to proceed"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
export default user;
