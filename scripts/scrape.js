
$("#scrapeMore").on("click", function(){
request("https://climate.nasa.gov/features/?page=0&per_page=15&order=publish_date+desc%2C+created_at+desc&search=&category=98", function(error, response, html) {
    
      // Load the HTML into cheerio, save it to variable
      var $ = cheerio.load(html);
    
      // An empty array to save scraped data 
      var results = [];
    
      // With cheerio, find each p-tag with the "title" class
      // (i: iterator. element: the current element)
      $("div.content_title").each(function(i, element) {
    
        // "title" variable
        var title = $(element).text();
    
        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have
        var partialLink = $(element).children().attr("href");

        //grabbing the summary
        var summary = $(element).next().text();
    
        // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
          title: title,
          url: partialLink,
          summary: summary,
        });
      });
    
      // Log the results once you've looped through each of the elements found with cheerio
      console.log(results);
      $.ajax({
        url: "/scraped",
        method:"POST",
        data:{
          newArticles:results
        }
        }).done(function(error){
          if(error) throw error;
          console.log("New articles have been scraped from NASA's Climate Website");
        });
    });


  });