var pageInfo = require('../model/pageInfo');

module.exports ={

    search : function(URL){
        var query = pageInfo.find({link:URL},function(err,pageInfo){
            console.log('%s',pageInfo);
            
            console.log("Search Completed!");
        });
    }

}   