// Aleena: declare variables
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz&per_page=5`

// Aleena: fetch when the page is loaded
window.onload = function(lat,lon){

fetch(seatGeekURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)

})}