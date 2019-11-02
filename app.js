var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');
var bodyparser = require('body-parser');

app.use(express.static(__dirname+ '/public'));
app.get('/',function(req,res){
res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.use('/api',routes);


app.listen(3000);