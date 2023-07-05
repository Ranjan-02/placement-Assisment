const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxLength: 2000,
  },
});

module.exports = mongoose.model("Post", postSchema);
