// Aleena: declare variables
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz&per_page=5&range=50mi`
var tableEl = document.getElementById("test");
var weatherIconEl = document.getElementById("weather-icon");
var tempEl = document.getElementById("temp"); // Suzy: set variable for temp element

// Aleena: fetch when the page is loaded
window.onload = function(){
var cities = localStorage.getItem("cities");
fetch(seatGeekURL+"&city="+cities)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
 
    for(var i = 0; i < data.venues.length; i++){
        console.log(data.venues[i]);
        var address = document.createElement("h2");
        address.textContent=data.venues[i].name;
  tableEl.appendChild(address)
    } 
   getWeather(cities) 
})

function getWeather(cities){
var weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${cities}&APPID=14cbe9a851348e71f4881cd59afa5e76`;
fetch(weatherURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    weatherIconEl.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    
    // Suzy: Add temp converted to fahrenheit to display under weather icon
    var tempF = ((data.main.temp - 273.15) * 1.80 + 32).toFixed(2);
    console.log(tempF);
    tempEl.append(tempF + "F");

    })};


// Anna: Added switch on toggle button to switch the background
const slider = document.querySelector('.slider')
const body = document.querySelector('body')

slider.addEventListener('mousedown', BgChange)


function BgChange() {
    body.style = `background: url(./images/Gigs_LOGO.png) no-repeat center center/cover`
}


//Anna - redirect to index.hml
var backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click",function(event){
  event.preventDefault();
  location.replace("./index.html")
});
}



