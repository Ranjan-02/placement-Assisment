const Post = require("../models/CreatePost");

// post cretations

exports.createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;

    const post = new Post({
      title,
      content,
      user,
    });

    const postObject = await post.save();
    console.log(postObject);
    res.status(200).json({
      success: true,
      message: "post created successfully",
      postObject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "post not created ",
      error: error.message,
    });
  }
};
