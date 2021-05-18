const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!user) {
      res.status(401).json({ error: "Unauthorized: Token not match" });
      return;
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }
};

module.exports = Authentication;
