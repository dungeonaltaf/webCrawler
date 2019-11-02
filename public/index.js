$(document).ready(()=>{
    $('#crawlBtn').click(function(){
        var urldata = $('#urlBox').val();
        var actualreq = "https://www."+urldata+".com";
        console.log(actualreq);
        $.ajax({ 
                url:"http://localhost:3000/api/crawl",
                method:"POST",
                headers:{
                    "content-type": "application/json"
                  },
                data: {url:actualreq}
        })
    })
});