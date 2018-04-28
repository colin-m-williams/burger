var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//  Create the `router` for the app
// Redirect user to index
router.get("/", function(req, res) {
  res.redirect("/index");
});

// Index Page (render all burgers to DOM)
router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// create a new burger
router.post("/burger/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    // Send back the ID of the new burger
    res.redirect("/index");
  });
});

router.post("/burger/eat/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/index");
  });
});

// Export the `router` for server.js to use.
module.exports = router;
