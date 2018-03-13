//on click for each article on the home page will select the id and 
//update the url on the iframe
$(".article").on('click', function(){
   var URL = $(".article").data('url');
   var articleID = $(".article").attr('id');
   $(".viewArticle").src(URL).attr('id', articleID);
   console.log(`Viewing article with the URL ${URL}`);
});


//on click event listener with ajax POST for new notes
$("#submitNote").on('click', function(){
    var body = $("#newNote").text().trim();
    var author = $("#noteAuthor").text().trim();
    var artID = $(".viewArticle").attr('id');
    var newNote = {
        body,
        author
    };
    $.ajax({
        url:`/articles/${artID}`,
        method:'POST',
        data: {
            newNote
        }
    }).done(function(err){
        if(err) throw err;
        console.log("New note added to the database");
    })
});
