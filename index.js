const express = require("express");
const http = require("http");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;

// Here we mean our app is going to use express node module
const app = express();

//We can serve the static files present just by putting the __dirname + '/path of the folder containing static files'
app.use(express.static(__dirname, +"/public/"));

// Using morgan to log data
app.use(morgan("Dev"));

// next is an optional param.. .use is a use of middleware
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express server</h1></body></html>");
});

// we need to create server by passing the express application that we've setup previously
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
