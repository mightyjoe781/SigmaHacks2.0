// API for local news
// initial location : Spain

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
 
  var i;
  fetch("https://api.coronatracker.com/news/trending?limit=10&offset&country=India&countryCode", requestOptions)
    .then(response => response.json())
    .then(result => document.getElementById("news").innerHTML = result)
    .then(result => {
          document.getElementById("news").innerHTML = "";
          for(i = 0; i < 10 ; i++){
            var author = "";
            if(result.items[i].author.length==0){
              author = result.items[i].author;
            } else {
              author = "Anonymous";
            }
               document.getElementById("news").innerHTML += "<div class=\"item\"><div class=\"content\"><div class=\"ui header center aligned\"><hr>" + result.items[i].title + "<hr></div>" + " <div class=\"meta\"> Author : "+ author + "<br> Published on "+ result.items[i].publishedAt.replace("T", " @ ").replace("Z", " ") +"<br> Published by "+ result.items[i].siteName + "</div><div class=\"description\"><br>" + result.items[i].description + "<br><br>" + result.items[i].content + "<br><br> Read More at : " + "<a href = '" + result.items[i].url + "'>" + result.items[i].url +"</a><br><br></div><div class=\"ui image\"> <img src=\"" + result.items[i].urlToImage+"\"><br><br></div></div></div>";
          }
  
    })
    .catch(error => console.log('error', error));