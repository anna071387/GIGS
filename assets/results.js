// Aleena: declare variables
var seatGeekURL = `https://api.seatgeek.com/2/events?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz&per_page=10&range=50mi`
var searchResultsForEl = document.getElementById("searchResultsFor");
var firstColumnEl = document.getElementById("first-column");
var secondColumnEl = document.getElementById("second-column");
var thirdColumnEl = document.getElementById("third-column");
var weatherIconEl = document.getElementById("weather-icon");
var tempEl = document.getElementById("temp"); // Suzy: set variable for temp element
var url = "";
// Aleena: fetch when the page is loaded and display the results
window.onload = function () {
    var cities = localStorage.getItem("cities");
    fetch(seatGeekURL + "&venue.city=" + cities)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            searchResultsForEl.append(cities);

            for (var i = 0; i < data.events.length; i++) {
                console.log(data.events[i]);
                // url= data.events[i].url
                console.log(url)
                var dateContainer= document.createElement("div");
                dateContainer.className ="firstrow";
                var dtEl = document.createElement("h4");
                // Suzy: format date and time
                dtEl.textContent = dayjs(data.events[i].datetime_local).format('MMM D, YYYY, h:mm A');
                firstColumnEl.appendChild(dateContainer);
                dateContainer.append(dtEl);
                var card = document.createElement("div");
                card.className = "secondrow";
                var performerEl = document.createElement("h4");
                performerEl.textContent = data.events[i].title;
                var venueEl = document.createElement("h5");
                venueEl.textContent = data.events[i].venue.name;
                var addressEl = document.createElement("p");
                addressEl.textContent = data.events[i].venue.extended_address;
                secondColumnEl.appendChild(card);
                card.append(performerEl, venueEl, addressEl);
                var imgContainer = document.createElement("div");
                var img = document.createElement("img");
                img.setAttribute("src", `${data.events[i].performers[0].image}`);
                thirdColumnEl.appendChild(imgContainer);
                imgContainer.append(img);
            }


            getWeather(cities)
        })

    button.addEventListener("click", getURL(url));
    // Aleena: clickable ticket buttons
    function getURL() {
        console.log(url);
        window.open(url);
    }

    function getWeather(cities) {
        var weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${cities}&APPID=14cbe9a851348e71f4881cd59afa5e76`;
        fetch(weatherURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                weatherIconEl.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); // Suzy: Increase weather icon size

                // Suzy: Add temp converted to fahrenheit to display under weather icon
                var tempF = ((data.main.temp - 273.15) * 1.80 + 32).toFixed(0); // Suzy: Change to 0 digits to appear after decimal point for temp in F
                console.log(tempF);
                tempEl.append(tempF + "F");

            })
    };


    // Anna: Added switch on toggle button to switch the background
    const slider = document.querySelector('.slider')
    const body = document.querySelector('body')

    slider.addEventListener('mousedown', BgChange)


    function BgChange() {
        body.style = `background: url(./images/Gigs_LOGO.png) no-repeat center center/cover`
    }


    //Anna - redirect to index.hml
    var backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", function (event) {
        event.preventDefault();
        location.replace("./index.html")
    });
}



