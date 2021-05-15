const express = require("express");
const userRouter = require("./routes/userRouter");
const app = express();

app.use(express.json());
//configure router middleware here
app.use("/", userRouter);



module.exports = app;
