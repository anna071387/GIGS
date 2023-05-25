// declare seatGeek API and search button El
var searchButtonEl = document.getElementById("searchButton");
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz`

// fetch seatGeek API
searchButton.addEventListener("click",function(event){
fetch(seatGeekURL)

//declare weather API and searchButton 
var searchButtonEl = document.getElementById("searchButton");
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=14cbe9a851348e71f4881cd59afa5e76'

//weather API
searchButton.addEventListener("click",function(event){
    fetch(weatherURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })

});

});

