const express = require("express");
const app = express();

// fetch all env file data using dotenv and store into process object
require("dotenv")?.config();
const PORT = process?.env?.PORT;
console.log(PORT);

//middleware
app.use(express.json());

//import route and mount
const route = require("./routes/route");
app.use("/api/v1", route);

//db call
const { dbConnect } = require("./config/db");
dbConnect();

//listen server
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
