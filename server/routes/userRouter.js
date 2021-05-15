const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

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

//test route
router.get("/test", function (req, res, next) {
  res.cookie("jwtoken", "MY JWT TOKEN", {
    expires: new Date(Date.now + 5000000),
    httpOnly: true,
  });
  res.send("Cookies added");
});
module.exports = router;
