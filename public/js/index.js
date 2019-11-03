$(document).ready(()=>{
    $('#crawlBtn').click(function(){
        var urldata = $('#urlBox').val();
        var actualreq = "https://www."+urldata+".com";
        console.log(actualreq);
        $.ajax({ 
                url:"http://localhost:3000/api/crawl",
                method:"POST",
                headers:{
                    "content-type": "application/x-www-form-urlencoded"
                  },
                data: {url:actualreq}
        })
    });
    $('#queryBtn').click(function(){
        var urldata = $('#urlQuery').val();
        var actualreq = "https://www."+urldata+".com";
        console.log(actualreq);
        $.ajax({ 
                url:"http://localhost:3000/api/search",
                method:"POST",
                headers:{
                    "content-type": "application/x-www-form-urlencoded"
                  },
                data: {url:actualreq},
                success: function (response) {
                  var trHTML = '';
                  console.log("Ajax receieved");
                  console.log(response);
                  $.each(response, function (i, item) {
                      console.log("The iterator");
                      trHTML += '<tr><td>' + item.title + '</td><td>' + item.h1 + '</td><td>' + item.h2+'</td><td>'+ item.link + '</td></tr>';
                  });
                  $('#records_table').append(trHTML);
              }
        })
    });

});