const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog");
const fs = require("fs");

// ...

app.use("/blog", blog);

app.use(express.static("public"));
// Middleware one. -> Logger for our application.
app.use((req, res, next) => {
  console.log(req.headers);
  req.harry = "I am harry bhai";
  // Here next means, next middleware
  console.log("m1");
  //   res.send("Hacked by middleware one"); // Request has been sent so now, next() karne se koi faida nahi hai.
  next(); // -> If i will not give next() then the request will be stopped there will not be able to run. next() means request is going toward next route handler.
});

// Middleware two.
app.use((req, res, next) => {
  // Here next means, next middleware
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!" + req.harry);
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

