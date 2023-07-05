const express = require("express");
const router = express.Router();

// import controller
const { createPost } = require("../controllers/createPost");

// create routes
router.post("/post", createPost);

module.exports = router;
