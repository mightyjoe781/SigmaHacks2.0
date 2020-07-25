// might not work all time 

var i;

$(function() {
$.getJSON("https://extreme-ip-lookup.com/json/",
   function(json){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=36&page=1&search="+json.countryCode.toLowerCase()+"&order=total_cases&how=asc", requestOptions)
  .then(response => response.json())
  .then(result => 
    {for(i = 0; i<35 ; i++){
        if(result.data.rows[i].country_abbreviation==json.countryCode.toUpperCase()){
            document.getElementById('flag').innerHTML = "<img style = 'max-height: 20px;' src="+result.data.rows[i].flag+">";
        }
    }})
  
  .catch(error => console.log('error', error));
  
                }   
            );
});

//"url": "",
