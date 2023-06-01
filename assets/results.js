// Aleena: declare variables
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz&per_page=5&range=50mi`

// Aleena: fetch when the page is loaded
window.onload = function(){
var cities = localStorage.getItem("cities");
fetch(seatGeekURL+"&city="+cities)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
 
    for(var i = 0; i < data.list.length; i++){
        console.log(data.list[i]);
        var address = document.createElement(h2);
        address.textContent=data.list[i].venues.city}
    

})


const slider = document.querySelector('.slider')
const body = document.querySelector('body')

slider.addEventListener('mousedown', BgChange)


function BgChange() {
    body.style = `background: url(./images/LightBG_small.jpg)no-repeat center center cover`
}
// function toggle() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
// }


}

