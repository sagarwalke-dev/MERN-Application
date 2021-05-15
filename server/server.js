const http = require("http");
const app = require("./app");
const dotenv = require("dotenv").config({ path: "./config.env" });

//create server
const server = http.createServer(app);

//configure server port number
server.listen(process.env.PORT);

server.on("listening", () => {
  console.log(`server running at http://localhost:${process.env.PORT}/`);
});
