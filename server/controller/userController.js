const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let userRegistration = async (req, res, next) => {
  const { name, email, contact, work, password, cpassword } = req.body;

  try {
    if (!name || !email || !contact || !work || !password || !cpassword) {
      return res.status(422).json({ error: "Please fill all data" });
    }
    const userExist = await User.findOne({ userEmail: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    const user = new User({
      userName: name,
      userEmail: email,
      userContact: contact,
      userWork: work,
      userPassword: password,
      userConfirmPassword: cpassword,
    });

    const response = await user.save();
    if (response) {
      return res.status(201).json({ message: "User registered successfully" });
    } else {
      return res.status(500).json({ error: "User registration failed" });
    }
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
    console.log(err);
  }
};

//login
let userLogin = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(422).json({ error: "Please fill the data" });
  //check user exist or not
  let validUser = await User.findOne({ userEmail: username });

  if (validUser) {
    //compare hash password
    let isMatch = await bcrypt.compare(password, validUser.userPassword);
    //matching user password
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    } else {
      let token = await validUser.generateAuthToken();
      console.log("token generated");
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now + 5000000),
        httpOnly: true,
      });
      console.log("cookies added");
      return res.status(200).json({ message: "Login success" });
    }
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = { userRegistration, userLogin };
