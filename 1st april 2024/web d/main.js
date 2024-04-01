// nodemon -> nodemon is a module that will look at the main website, we have installed it globally. So, whatever changes will happen on the page, it will look at them and then it will start the server automatically, we do not need to do it manually.
// nvm ->It is a node version manager. It is a facility. This is helpful while working with different versions of node. Let suppose we are working with node version 16 then we will write. $ nvm use 16 -> Here we will be able to use node version 16 and we can write $ nvm use 14 for using node version 14.
// const { createServer } = require("node:http"); // Here in this line we are importing http module. whatever module we will install so we will write require() and then within it we will write the module name. If i want to install fs then i can write.
// const fs = require("fs");
// Now I can use the functions of fs, like.
// fs.readFileSync()
// This is how we import the module using common js. This modules which we are importing using required, they use synchornous code in order to get installed.
// When our file type is module within package.json then we will write.
// import http from "http";
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello World<h1>");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import { a } from "./mymodules.js";
// console.log(a);

// import obj from "./mymodules.js";
// console.log(obj);

const a = require("./mymodule2.js");
console.log(a);
