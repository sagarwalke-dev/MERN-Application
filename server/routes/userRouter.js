const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const Auth = require("../middleware/auth");
//registration route
router.post("/registration", function (req, res, next) {
  console.log("start registering  new user...");
  userController.userRegistration(req, res, next);
  console.log("end registering  new user...");
});

//login route
router.post("/login", function (req, res, next) {
  console.log("start checking login details...");
  userController.userLogin(req, res, next);
  console.log("end checking login details...");
});

//logout route
router.get("/logout", function (req, res, next) {
  res.clearCookie("jwtoken", { path: "/" });
  console.log("user logged out");
  res.sendStatus(200).send("User Logged out");
});
router.get("/auth", Auth, function (req, res, next) {
  console.log("Auth completed");
});

//test route
router.get("/test", function (req, res, next) {
  let data = "MYCOOKIES";
  res.cookie("jwtoken", data, {
    expires: new Date(Date.now + 5000000),
    httpOnly: true,
  });
  res.send("Cookies added");
  var cookies = req.headers.cookie;
  res.end(`<h1>${cookies}</h1>`);
});
module.exports = router;
