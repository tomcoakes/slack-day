module.exports = function (server) {

  server.post('/search/', function (req, res, next) {
    console.log(req.body.text);
    res.send("You've made a search!");
  });
};
