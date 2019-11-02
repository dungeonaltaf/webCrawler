var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var server = require('./server');
var search = require('./search');
var jsonparser = bodyparser.json();
var urlencoder = bodyparser.urlencoded({extended:false});
// Home page route.
router.post('/crawl',urlencoder, function (req, res) {
  console.log("Its crawling time");
  console.log(req.body);
  console.log(req.body.url);
  server.crawl(req.body.url);

});

router.post('/search',urlencoder,function(req,res){
  console.log("It's search time");
  console.log(req.body);
  console.log(req.body.url);
  search.search(req.body.url);
})
// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
});

module.exports = router;
