const jwt = require("jsonwebtoken");

require("dotenv").config();

// //^ authentication middleware
exports.auth = (req, res, next) => {
  try {
    //* extract JWT token

    const { token } = req.body;

    console.log(token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "missing token",
      });
    }

    //* verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      //* store decode object (payload) inside request user
      //! why this ?
      req.user = payload;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
        error: err.message,
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong while verifying the token",
      error: error.message,
    });
  }
};
