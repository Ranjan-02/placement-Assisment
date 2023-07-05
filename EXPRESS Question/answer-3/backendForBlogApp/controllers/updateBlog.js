// import blog schema
const Blog = require("../models/Blog");

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    // data for given id found
    res.status(200).json({
      success: true,
      data: blog,
      message: `Updated successfully`,
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
