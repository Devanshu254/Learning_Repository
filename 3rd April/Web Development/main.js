// Here express is used to make production websites. We usually say that do not use the http package in order to create website. That is why we have created express.

// With the help of node js, we can create a server.
// There is a package named http which helps us creating a server.
// But, whenever we make a server, we will have a problem of manually starting a server. This problem was solved by NodeMon. npm i --global nodemon. nodemon main.js -> For restarting a server.
// npm init -y. -> It will create package.json file.

// Express.js -> It is a web framework, which is used to create websites. The http package capabilities are limited. We can not serve static file, we need to implement security from the beginning. How much code we will write and after creating a server, how we will manage a server. To do GET REQUEST and POST REQUEST, We need to make custom code. That is why Express.js is created.

// We can normally install express.js by using, npm i express. But the thing is, Express got updated very soon. So here, we are using version 4, so we will write npm i express@4. For version3, we will write npm i express@3. But here we are using 4.

const express = require("express"); // We have imported an express package.
const app = express(); // We have defined an app.
const port = 3000; // We have defined port.

app.use(express.static("public"));

app.get("/", (req, res) => {
  // after app.get, we will write handler. Jab Bhi is path per koi request aaye toh yeh handler chala do.
  // app.get or app.post or app.put or app.delete(path, handler).
  res.send("Hello World2!");
});
// app.get("/about", (req, res) => {
//   res.send("About Us");
// });
// app.get("/about", (req, res) => {
//   res.send("About Us");
// });
// app.get("/blog/intro-to-js", (req, res) => {
//   //Logic to fetch the introjs from db.
//   res.send("Hello, intro to js");
// });
app.get("/blog/:slug", (req, res) => {
  res.send(`hello${req.params.slug}`); // Here we are passing parameters and we are saying whatever comes there app.get("blog/:slug" (req, res)) -> it comes here {slug}.
});
// We can also give two values.
app.get("/blog/:slug/:second", (req, res) => {
  res.send(`hello ${req.params.slug} and ${req.params.second}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Get Request: Get Request means, whatever we put in browser like, 127.0.0.1:3000 -> This is get request, by default we use get request in browser.
// If we want to send Post Request: Then we will create a html file and then we will put post request or we can use a tool like POSTMAN but here first we will see html file.
// Request parameters and queries. Suppose that, I am creating a blog app so I will create some pages and I will say that app.get/, app.get('/about').
// app.get('/contact', (req, res) => {
//req.send("hello world.")
//})

// Now, how we will serve, static files ?
// If we have a public file harry.txt and my server is on. By default, it will give error.
// How we will serve this ?
// Make a public folder. and push harry.txt file within public.
// do not forget to give - > app.use(express.static('public'))

