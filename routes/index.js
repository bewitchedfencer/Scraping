var express = require("express");

var router = express.Router();
var db = ("./models");

// rendering the route to the home page

//scraping the new articles
router.post("/scraped", function(req, res){
    var article = req.body;
    db.Headline.insert(article).then(function(response){
       console.log("New articles scraped and added to Database");
       redirect.reload("/");
    });
});

router.get("/", function(req, res){
    db.Headline.find().then(function(results){
        res.render("home", {articles:results})
    })
})

//rendering the route to the saved notes page

//patch route for updating the iframe with the selected article
router.get("/article/:id", function(req, res){
    
})
