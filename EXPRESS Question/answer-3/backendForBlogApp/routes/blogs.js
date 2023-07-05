const express = require("express");
const router = express.Router();

//import controller
const { createBlog } = require("../controllers/createBlog");
const { getBlog } = require("../controllers/getBlog");
const { getBlogById } = require("../controllers/getBlogById");
const { updateBlog } = require("../controllers/updateBlog");
const { deleteBlog } = require("../controllers/deleteBlog");

//define API routes
router.post("/createBlog", createBlog);
router.get("/getBlog", getBlog);
router.get("/getBlogById/:id", getBlogById);
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;
