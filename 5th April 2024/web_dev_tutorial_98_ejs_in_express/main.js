const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// There are other view engines also, like pug, template engine handlebars. But we will go with ejs.

// app.get("/", (req, res) => {
//   let siteName = "Adidas"; // Maanlo ki hamne ye chheez database se nikaali hai.
//   let searchText = "Search Now";
//   // Suppose that above two values we have fetched from database. But now how will I put them within this template.
//   res.sendFile("templates/index.html", { root: __dirname });
// });

app.get("/", (req, res) => {
  let siteName = "Adidas"; // Maanlo ki hamne ye chheez database se nikaali hai.
  let searchText = "Search Now";
  let arr = [1, 54, 65];
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr,
  });
});

// app.get("/blog/:slug", (req, res) => {
//   let blogTitle = "Adidas why and when"; // Maanlo ki hamne ye chheez database se nikaali hai.
//   let blogContent = "It is a very good brand.";
//   res.sendFile("templates/blogpost.html", { root: __dirname });
//   // We want that above two variables must be pushed within a template. But how ? For each blog I will not create blog.html.
//   // The solution to this problem is template engine. Ejs - template engine and to use it we do npm install ejs.
// });

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why and when"; // Maanlo ki hamne ye chheez database se nikaali hai.
  let blogContent = "It is a very good brand.";
  res.render("blogpost", {
    // we do not need to write here views/index.ejs, we can directly write index.
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
  // This means we have passed an object and we said that whatever we will get as blogTitle.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

