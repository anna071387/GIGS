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


// AnnaG: added a todays date that can be displayed at the navbar?
$(document).ready(function () {
    // Added Current day with Dayjs 
      var today = dayjs();
      $('#date').text(today.format('MMM D, YYYY'));
      console.log(today);
});
// _______________________________________


// AnnaG: added a click button to change the background image from Dark image to light image
$(document).ready(function() {
    $("button").click(function() {
      $(".content1").toggleClass("active");
    });
  });
//____________________________________

