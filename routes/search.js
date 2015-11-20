var request = require('request');

module.exports = function (server) {

  server.post('/search/', function (req, res, next) {

    var options = {
      url: 'http://localhost:11040/search/more?startFrom=0&q=' + req.body.text,
      headers: {
        'Accept': 'application/json'
      }
    };

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.setHeader('Content-Type', 'application/json');
        var parsedBody = JSON.parse(body);



        var attachments = parsedBody.searchResults.hits.map(function(intel){
          return {
            "title": intel.headline,
            "title_link": intel.url,
            "text": intel.body,
            "fields": [
              {
                "title": "Country",
                "value": intel.dominantCountry,
                "short": true
              },
              {
                "title": "Sector",
                "value": intel.dominantSector,
                "short": true
              }
            ],
            "color": "#002344"
          };
        });

        var output = {
          "text": "Search Results for: " + req.body.text + " (" + parsedBody.searchResults.hits.length + " results found)",
          "attachments": attachments
        }
        res.send(output);
      }
    })


  });
};
