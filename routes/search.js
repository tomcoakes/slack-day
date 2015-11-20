var request = require('request');

module.exports = function (server) {

  server.post('/search/', function (req, res, next) {

    request('http://www.google.com', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
      }
    })

    res.send("You've made a search for: " + req.body.text);
  });
};
