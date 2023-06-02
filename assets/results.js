// Aleena: declare variables
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz&per_page=5&range=50mi`
var searchResultsForEl = document.getElementById("searchResultsFor");
var ColumnEl = document.getElementById("column");
var weatherIconEl = document.getElementById("weather-icon");
var tempEl = document.getElementById("temp"); // Suzy: set variable for temp element
var url = "";
// Aleena: fetch when the page is loaded and display the results
window.onload = function(){
var cities = localStorage.getItem("cities");
fetch(seatGeekURL+"&city="+cities)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    searchResultsForEl.append(cities);
 
    for(var i = 0; i < data.venues.length; i++){
        console.log(data.venues[i]);
        url= data.venues[i].url
        console.log(url)
        var card = document.createElement("div");
        card.setAttribute = ("class","custom-second");
        var venueEl = document.createElement("h4");
        venueEl.textContent=data.venues[i].name;
        var venueCityEl = document.createElement ("p");
        venueCityEl.textContent=data.venues[i].extended_address;
        var button = document.createElement("button");
        button.innerText = "GIG details";
    ColumnEl.appendChild(card);
    card.append(venueEl,venueCityEl,button);
    } 
   getWeather(cities) 
})

// Aleena: clickable ticket buttons
function getURL(){
    console.log(url);
    window.open(url);
}

function getWeather(cities){
var weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${cities}&APPID=14cbe9a851348e71f4881cd59afa5e76`;
fetch(weatherURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    weatherIconEl.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); // Suzy: Increase weather icon size
    
    // Suzy: Add temp converted to fahrenheit to display under weather icon
    var tempF = ((data.main.temp - 273.15) * 1.80 + 32).toFixed(0); // Suzy: Change to 0 digits to appear after decimal point for temp in F
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



