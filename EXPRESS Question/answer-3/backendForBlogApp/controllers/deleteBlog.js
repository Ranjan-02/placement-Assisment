// import blog schema
const Blog = require("../models/Blog");

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    await Blog.findByIdAndDelete(id);
    // data for given id found
    res.status(200).json({
      success: true,

      message: `deleted successfully`,
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
