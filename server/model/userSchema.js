const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Database = require("../services/database");

//define schema
const userSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: true,
  },
  userName: {
    type: String,
    require: true,
    lowercase: true,
  },
  userEmail: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  userContact: {
    type: Number,
    minLength: 10,
    maxLength: 12,
  },
  userWork: {
    type: String,
    lowercase: true,
  },
  userPassword: {
    type: String,
    require: true,
  },
  userConfirmPassword: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});
userSchema.plugin(Database.autoIncrement, { inc_field: "userId" });

//Hashing password before save into DB
userSchema.pre("save", async function (next) {
  if (this.isModified("userPassword")) {
    console.log("Hashing password...");
    if ((this.userPassword = await bcrypt.hash(this.userPassword, 15)));
    if (
      (this.userConfirmPassword = await bcrypt.hash(
        this.userConfirmPassword,
        15
      ))
    );
  }
  next();
});

//generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
//export user model
module.exports = mongoose.model("user", userSchema);
