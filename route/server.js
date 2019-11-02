const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const pageInfo =require('../model/pageInfo');



module.exports = {

    crawl :function(URL){
        request(URL,function(err,res,body){

            if(err){

                console.log(err,"error occured while hitting url");

            }

            else {

                const arr=[];
                let $ = cheerio.load(body);
                var title = $("title").text();
                var h1 = $('h1').text();
                var h2 = $('h2').text();
                console.log("title:"+title+"h1"+h1+"h2"+h2);
                arr.push(JSON.stringify(title));
                console.log(arr.toString());

                let newpageInfo = new pageInfo({
                        link:URL,
                        title:title,
                        h1: h1,
                        h2:h2
                });
                newpageInfo.save(function(err,pageInfo){
                    if(err){
                        console.log("Couldnt saved it");
                    }
                    else{
                        console.log("Saved it");
                    }
                });
            }
        });
    }
}