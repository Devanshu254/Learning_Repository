const express = require("express");

const router = express.Router(); 
  
  router.get("/", (req, res) => {
    res.send("Birds home page");
  });
// define the about route
router.get("/about", (req, res) => {
  res.send("About blogs");
});
router.get("/blogpost/:slug", (req, res) => {
  res.send(`fetch the ${req.params.slug}`);
});

module.exports = router;
