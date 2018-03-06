//Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var request = require("request");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

//Establish Server
var PORT = process.env.PORT || 3000;
app = express();
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Use morgan logger for logging requests
app.use(logger("dev"));
//Establish body parser
app.use(bodyParser.urlencoded({ extended: false }));
//For handlebars, templating engine
const exphbs = require("express-handlebars"); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//link to public folder
app.use(express.static("public"));


//link to routes
// follow the below examples from project 2
// const tutor_routes = require("./routes/tutor-routes.js");
// // var teacher_routes= require("./routes/teacher-routes.js");
// const html_routes = require("./routes/html-routes.js");

// const auth_routes = require("./routes/auth-routes.js");

// app.use(tutor_routes);
// // app.use(teacher_routes);
// app.use(html_routes);

// app.use(auth_routes);

//server listening
