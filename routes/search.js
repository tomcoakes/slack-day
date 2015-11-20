module.exports = function (server) {

  server.post('/search/', function (req, res, next) {
    console.log(req);
    res.send("You've made a search!");
  });
};
