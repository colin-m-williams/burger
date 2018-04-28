// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var mysql = require("mysql");

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// Tells node that we are creating an "express" server
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
