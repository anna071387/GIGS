//editing the fetch 
var searchButtonEl = document.getElementById("searchButton");
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=14cbe9a851348e71f4881cd59afa5e76'

searchButton.addEventListener("click",function(event){
    fetch(weatherURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
});