// Aleena: declare variables
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz&per_page=5&range=50mi`
var tableEl = document.querySelector(".table-container")

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
        var address = document.createElement(h2);
        address.textContent=data.venues[i].city}
    

})

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

