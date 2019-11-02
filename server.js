const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

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
        console.log(title);
        arr.push(JSON.stringify(title));
        console.log(arr.toString());
        
        fs.writeFile('data.txt',arr,function(err){

            if(err){
                console.log(err);
            }
            else{
                console.log("Success");
            }
        });
    }
    
});
}
}