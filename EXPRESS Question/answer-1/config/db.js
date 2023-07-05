const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log(result);
      console.log("mongodb connection successfull");
    })
    .catch((error) => {
      console.error(error);
      console.log("db connection issue");
      process.exit(1);
    });
};
