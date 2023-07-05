const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//* signup route handler
exports.signUp = async (req, res) => {
  try {
    //* get data
    const { name, email, password, role } = req.body;

    //* check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        successs: false,
        message: "User already exist",
      });
    }

    //* secure password
    let hashedPassword;
    let saltRound = 10;

    try {
      hashedPassword = await bcrypt.hash(password, saltRound);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        success: false,
        message: "error in hashing password",
      });
    }

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User cannot registred please try again",
      error: error.message,
    });
  }
};

//* login route handler
exports.login = async (req, res) => {
  console.log("login");
  try {
    // data fetch from request body using body parser
    const { email, password } = req.body;
    // validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill the all detail carefully",
      });
    }
    //check for registered user
    const user = await User.findOne({ email });
    // if not aregistered user
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user is not registered",
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    //^ verify password and generate jwt token
    if (await bcrypt.compare(password, user.password)) {
      // password match then logged in but first create JWT(Json Web Token)

      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      //user k object me token save kara diya
      user.token = token;
      console.log(typeof user);

      // user k object se ham password ko hta rhe hain na ki db se
      user.password = undefined;

      return res.status(200).json({
        success: true,
        token,
        user,
        message: "User Logged in Successfully",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "logedin faliure",
    });
  }
};
