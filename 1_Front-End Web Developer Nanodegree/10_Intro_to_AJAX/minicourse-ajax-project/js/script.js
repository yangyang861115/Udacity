function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var $street = $('#street').val();
    var $city = $('#city').val();
    var address = $street + ',' + $city;
    console.log(address);
    $greeting.text('So, you want to live at ' + address + '?');
    var GoogleUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + "&key=AIzaSyD6vKsGbaYeA6xgdUDfU3n_CiYxwdNPOX4";

    var img = "<img class='bgimg' src=" + GoogleUrl + ">";
    $('body').append(img);

    // New York Time
    var NYUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + $city + "&api-key=724a152f34760f7116358294cea156a8:10:73610961";

    $.getJSON(NYUrl, function (data) {
            $nytHeaderElem.text('New York Times Articles About ' + $city);
            var articles = data.response.docs;
            for (var i = 0; i < articles.length; i++) {
                var article = articles[i];
                $nytElem.append('<li class="article"><a href="' + article.web_url + '">' + article.headline.main + '</a><p>' + article.snippet + '</p></li>');
            }
        })
        .error(function (e) {
            $nytHeaderElem.text('New York Times Coule Not Load Articles');
        });

    //Wikipedia 
    var WikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $city + "&format=json&callback=wikiCallback";
    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get wikipedia resources")
    }, 8000);
    
    $.ajax({
        url: WikiUrl,
        dataType: 'jsonp',
        success: function (response) {
            var articleList = response[1];
            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
            }
            clearTimeout(wikiRequestTimeout);
        }
      
    });

    return false;
};

$('#form-container').submit(loadData);