var express = require('express');
var app = express();
var routes = require('./route/routes');
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require  ('mongoose');

mongoose.connect('mongodb://localhost:27017/webCrawler', {useNewUrlParser: true}).catch(erro=>handleError(error));
mongoose.connection.on('error', err => {
    console.log(err);
  });
app.use(express.static(__dirname+ '/public'));
app.get('/',function(req,res){
res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.use('/api',routes);


app.listen(3000);