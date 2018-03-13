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
    db.Note.create(newNote)
    .then(function(dbNote) {
      return db.Headline.findOneAndUpdate({ _id: articleID }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

router.get(`/articles/:id`, function(req, res){
    var articleID = req.params.id;
    db.Headline.find({_id:articleID})
    .populate('note')
    .then(function(articles){
        res.json(articles);
    })
    .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
});