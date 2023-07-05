const express = require("express");
const router = express.Router();
const { auth } = require("../Middlwares/auth");

const { login, signUp } = require("../Controllers/Auth");

router.post("/login", login);
router.post("/signUp", signUp);

//! testing protected route for single middleware
// router.get("/test", auth, (req, res) => {
//   return res.status(200).json({
//     success: true,
//     message: "Welcome to the testing ruote",
//   });
// });

const { createPost } = require("../Controllers/PostController");

router.post("/post", auth, createPost);

module.exports = router;
