const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const autoIncrementFactory = require("mongoose-sequence");

dotenv.config({
  path: path.join(__dirname, "../config.env"),
});

//connection url
// const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3wkxm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`;
//create connection with db
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection success");
  })
  .catch((err) => {
    console.log(`Database connection failed.\n${err}`);
  });
let conn = mongoose.connection;
const autoIncrement = autoIncrementFactory(conn);
module.exports = { autoIncrement };
