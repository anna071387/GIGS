var searchButtonEl = document.getElementById("searchButton");
var seatGeekURL = `https://api.seatgeek.com/2/venues?client_id=MzM4NjkxMjN8MTY4NDgwNzIxOS45Nzg3Mjgz`


searchButton.addEventListener("click",function(event){
fetch(seatGeekURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
});
