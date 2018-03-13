var express = require("express");

var router = express.Router();
var db = ("./models");

// rendering the route to the home page

router.get("/", function(req, res){
    db.Headline.find().then(function(results){
        res.render("home", {articles:results})
    });
});

//rendering the route to the saved notes page
router.get("/viewNotes", function(req, res){

});

//add a note to an article on the home page
router.post("/articles/:id", function(req, res){
    
});
