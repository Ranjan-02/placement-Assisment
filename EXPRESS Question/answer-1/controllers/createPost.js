const Post = require("../models/User");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Post.create({
      title,
      content,
    });

    console.log(title, content);

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "not created post",
    });
  }
};
