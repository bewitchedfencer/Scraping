//Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

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
const api_routes = require('./routes/api.js');
const view_routes = require('./routes/index.js');

app.use(api_routes);
app.use(view_routes);

//server listening
app.listen(PORT, function(){
    console.log(`App running on port ${PORT}`);
})