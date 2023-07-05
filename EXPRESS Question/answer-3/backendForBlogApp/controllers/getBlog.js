// import blog schema
const Blog = require("../models/Blog");

//define route handler
exports.getBlog = async (req, res) => {
  try {
    // using find function get all blog items from database
    const blogs = await Blog.find({});

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: blogs,
      message: "Entire blog data is fetched",
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
