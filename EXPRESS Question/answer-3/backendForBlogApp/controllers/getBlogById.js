// import blog schema
const Blog = require("../models/Blog");

//define route handler
exports.getBlogById = async (req, res) => {
  try {
    // extract blog item basis on id
    const id = req.params.id;
    const blog = await Blog.findById({ _id: id });

    // data forgiven id not found
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: `no data found woth given id`,
      });
    }
    // data for given id found
    res.status(200).json({
      success: true,
      data: blog,
      message: `Blog ${id} data successfully fetched`,
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
