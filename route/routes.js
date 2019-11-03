var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var server = require('./server');
var search = require('./search');
var jsonparser = bodyparser.json();
var urlencoder = bodyparser.urlencoded({extended:false});
var pageInfo = require('../model/pageInfo');

// Home page route.
router.post('/crawl',urlencoder, function (req, res) {
  console.log("Its crawling time");
  console.log(req.body);
  console.log(req.body.url);
  server.crawl(req.body.url);

});

router.post('/search',urlencoder,function(req,res,next){
  console.log("It's search time");
  console.log(req.body);
  console.log(req.body.url);
  var URL = req.body.url;
  pageInfo.find({link:URL},function(err,pageInfo){
    console.log("pageInfo is"+pageInfo);
    res.json(pageInfo);
    console.log("Search Completed!");
});
});
// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
});

module.exports = router;
