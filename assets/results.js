// Aleena: declare variables
var seatGeekURL = `https://api.seatgeek.com/2/events?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz&per_page=10&range=50mi`;
var searchResultsForEl = document.getElementById("searchResultsFor");
var firstColumnEl = document.getElementById("first-column");
var secondColumnEl = document.getElementById("second-column");
var thirdColumnEl = document.getElementById("third-column");
var weatherIconEl = document.getElementById("weather-icon");
var tempEl = document.getElementById("temp"); // Suzy: set variable for temp element
var url = "";
//Aleena: when the page is loaded call these functions
window.onload = function () {
  // Listener to call the fetch_api function when a new date is selected on the calendar
  let cal = document.getElementById("calendar_filter");
  cal.addEventListener("change", fetch_api);
  fetch_api();
};
// Aleena: When a date is selected, call the fetch/API function again,
// passing datetime_local=YYYY-MM-DD along with venue.city....
function fetch_api() {
  var cities = localStorage.getItem("cities");
  // Aleena: Get the value from the calendar. Use in the query if it is valid.
  let cal = document.getElementById("calendar_filter").value;
  let query = seatGeekURL + "&venue.city=" + cities;
  if (cal.length > 0) query += "&datetime_local.gte=" + cal;
  console.log(query);
  firstColumnEl.innerHTML = "";
  secondColumnEl.innerHTML = "";
  thirdColumnEl.innerHTML = "";
  searchResultsForEl.innerHTML = "";
  fetch(query)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      searchResultsForEl.append(cities);

    // Retrieve exsiting event history from local storage
    var eventHistory = JSON.parse(localStorage.getItem("eventHistory")) || [];

    // Store current event results in the event history
    var eventResults = data.events;
    eventHistory.push(eventResults);

    // Save updated event history in local storage
    localStorage.setItem("eventHistory", JSON.stringify(eventHistory));

      for (var i = 0; i < data.events.length; i++) {
        console.log(data.events[i]);
        // url= data.events[i].url
        console.log(url);
        var imgContainer = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", `${data.events[i].performers[0].image}`);
        secondColumnEl.appendChild(imgContainer);
        imgContainer.append(img);
        var card = document.createElement("div");
        card.className = "info-row";
        var dtEl = document.createElement("h4");
        // Suzy: format date and time
        dtEl.textContent = dayjs(data.events[i].datetime_local).format(
          "MMM D, YYYY, h:mm A"
        );
        var performerEl = document.createElement("h4");
        performerEl.textContent = data.events[i].title;
        var venueEl = document.createElement("h5");
        venueEl.textContent = data.events[i].venue.name;
        var addressEl = document.createElement("p");
        addressEl.textContent = data.events[i].venue.extended_address;
        // Suzy: add save button, need to add function to store/display saved event?
        // var saveBtn = document.createElement("button");
        // saveBtn.innerText = "Save Event";
        thirdColumnEl.appendChild(card);
        card.append(dtEl, performerEl, venueEl, addressEl);
      }
      getWeather(cities);
    });
}
// Mike - fetched weather API
function getWeather(cities) {
  var weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${cities}&APPID=14cbe9a851348e71f4881cd59afa5e76`;
  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      weatherIconEl.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      ); // Suzy: Increase weather icon size
      // Suzy: Add temp converted to fahrenheit to display under weather icon
      var tempF = ((data.main.temp - 273.15) * 1.8 + 32).toFixed(0); // Suzy: Change to 0 digits to appear after decimal point for temp in F
      console.log(tempF);
      // Clear previous temp
      tempEl.innerHTML = "";
      // Display current temp
      tempEl.append(tempF + "F");
    });
}
let toggle = document.getElementById("mode");
toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
