//scraping the new articles
router.post("/scraped", function(req, res){
    //this is actually an array of all of the articles
    var article = req.body;
    console.log(article);
    db.Headline.insert(article).then(function(response){
       console.log("New articles scraped and added to Database");
       redirect.reload("/");
    });
});

//saving the new notes to the database

router.post(`/articles/:id`, function(req, res){
    var newNote = req.body;
    var articleID = req.params.id;
    db.Note.insert(newNote)
})