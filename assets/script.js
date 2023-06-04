// declare seatGeek API and search button El
var searchButtonEl = document.getElementById("searchButton");
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz`;
var cityInputEl = document.getElementById("cityInput");

//declare weather API and searchButton
// Anna-added back ticks ` instead of ' to do template literal
var weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=14cbe9a851348e71f4881cd59afa5e76`;

//Aleena - redirect to results.hml (needs to work on functionality,

var weatherURL =
  "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=14cbe9a851348e71f4881cd59afa5e76";

//Aleena - redirect to results.html when search button is clicked
searchButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("cities", cityInputEl.value);
  window.location.replace("./results.html");
});

//weather API
searchButtonEl.addEventListener("click", function (event) {
  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    
});

// AnnaG: added a todays date that can be displayed at the navbar in the center
// WORKS!
$(document).ready(function () {
  // Added Current day with Dayjs
  var today = dayjs();
  $("#1a").text(today.format("MMM D, YYYY"));
  console.log(today);
});


