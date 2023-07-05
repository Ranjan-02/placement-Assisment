const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT;

// mddleware to parse json request body
app.use(express.json());

// import routes for TODO API
const blogRoutes = require("./routes/blogs");

//mount the todo API routes
app.use("/api/v1", blogRoutes);

// start server
app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route

app.get("/", (req, res) => {
  res.send(`<h1> This is Home Page. </h1>`);
});
