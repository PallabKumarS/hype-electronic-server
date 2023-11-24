const jwt = require("jsonwebtoken");
require("dotenv").config();

const createCookieToken = async (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "10h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = createCookieToken;
