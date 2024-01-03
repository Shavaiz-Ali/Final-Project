import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;
//signup controller
export const signup = async (req, res) => {
  try {
    //destructure
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    //checking if user allready signuped
    if (existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "user already exists" });
    }
    // making password hashed using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    // sending response to database
    res.json({
      status: 201,
      message: "User Created Successfully",
      success: true,
      data: newUser,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, err: "internal server error" });
  }
};

//login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //checking if user submits form without adding credentials
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "add your credentials to proceed" });
    }
    const findUser = await User.findOne({ email });
    //checking if user is available with the given email or not
    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }
    //comparing password
    const passwordCheck = await bcrypt.compare(password, findUser.password);
    //cheking is the user entered password is correct or not
    if (!passwordCheck) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect Password" });
    }
    // generating jwt token
    const token = jwt.sign(
      {
        userId: findUser._id,
        email: findUser.email,
        password: findUser.password,
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      success: true,
      message: "user login successfully ",
      data: findUser,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

//controller to get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    // Check if there are no users
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users added yet" });
    }

    // Send the users in the response
    return res.status(200).json(users);
  } catch (error) {
    // Handle internal server error
    res.status(500).json({ message: "Internal server error" });
  }
};

//controller for getting single user
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findById(id);
    // Check if user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user in the response
    return res.status(200).json(user);
  } catch (error) {
    // Handle internal server error
    return res.status(500).json({ error: "Internal server error" });
  }
};

//delete single user
export const deleteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "no user found to delete" });
    }
    res
      .status(200)
      .json({ message: "user Deleted Successfully", data: deletedUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error in deleteSingleuser" });
  }
};

//update single user

export const updateSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;

    // Hash the password if it's being updated
    if (userData.password) {
      const saltRounds = 10;
      userData.password = await bcrypt.hash(userData.password, saltRounds);
    }

    const user = await User.findByIdAndUpdate(id, userData, { new: true });

    if (!user) {
      return res.status(404).json({ message: "No user found to update" });
    }

    return res
      .status(200)
      .json({ message: "User updated successfully", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
//check session

export const authenticate = async (req, res) => {
  try {
    const user_id = req.user.userId;
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    return res.status(200).json({ message: "User Data", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
