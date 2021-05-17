const express = require("express");
const userRouter = require("./routes/userRouter");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());

app.use(cookieParser());
//configure router middleware here
app.use("/", userRouter);

module.exports = app;
