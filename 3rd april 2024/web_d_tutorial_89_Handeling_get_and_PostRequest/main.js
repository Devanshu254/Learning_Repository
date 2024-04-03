// Today we will see that, with the help of Express.js how can we handle GET, POST, DELETE, PUT requests. We will also see the concept of Chaining.
// Get Requests are used to send small small queries within the server. But if the information is more and we need to send it on server then will send this using POST Request.
const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");
const app = express();

const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop", shop);

app.get("/", (req, res) => {
  console.log("Hey it is a get request.");
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log("Its a post Request.");
  res.send("Hello World Post!");
});

app.get("/index", (req, res) => {
  console.log("Its a post Request.");
  res.sendFile("templates/index.html", { root: __dirname }); // This thing will send our file into our page.
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 });
});
// Chaining Concept.
// app.get("/", (req, res) => {
//     console.log("Hey it is a get request.");
//     res.send("Hello World!");
//   });
//   app.post("/", (req, res) => {
//     console.log("Its a post Request.");
//     res.send("Hello World Post!");
//   });

// HTML Serve -> To serve html, we will make a folder named template. Just to organize the thigns.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
