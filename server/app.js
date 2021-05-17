const express = require("express");
const userRouter = require("./routes/userRouter");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
//configure router middleware here
app.use("/", userRouter);

module.exports = app;
