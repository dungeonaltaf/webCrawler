var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    index:Number,
    link:String,
    title:String,
    h1:String,
    h2:String,
    pageRank: Number,
    dateOfCreation:{type:Date, default:Date.now}

});

module.exports = pageInfo = mongoose.model('pageInfo',schema);
