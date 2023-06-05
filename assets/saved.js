let toggle = document.getElementById("mode");
toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  console.log("hello");
});


// Write code below
// Suzy: Load last event history on saved page when user clicks saved link
window.onload = function() {
  // Retrieve event history from local storage
  var eventHistory = JSON.parse(localStorage.getItem('eventHistory')) || [];

  // Display event history on the page
  displayEventHistory(eventHistory);
};

function displayEventHistory(eventHistory) {
  var historyContainerEl = document.getElementById("eventHistoryContainer");

  if (eventHistory.length === 0) {
    historyContainerEl.innerHTML = "<p>No event history available.</p>";
    return;
  }

  var latestEventSet = eventHistory[eventHistory.length - 1];

  // Clear previously displayed results before appending the lastest event results
  historyContainerEl.innerHTML = "";

  // Create a section for the latest set of event results
  var sectionEl = document.createElement("section");
  sectionEl.className = "event-results";

  for (var j = 0; j < latestEventSet.length; j++) {
    var event = latestEventSet[j];

    // Create elements to display event details
    var card = document.createElement("div");
    card.className = "info-row";
    var dtEl = document.createElement("h4");
    dtEl.textContent = dayjs(event.datetime_local).format("MMM D, YYYY, h:mm A");
    var performerEl = document.createElement("h4");
    performerEl.textContent = event.title;
    var venueEl = document.createElement("h5");
    venueEl.textContent = event.venue.name;
    var addressEl = document.createElement("p");
    addressEl.textContent = event.venue.extended_address;

    // Append event details to the section
    sectionEl.appendChild(card);
    card.append(dtEl, performerEl, venueEl, addressEl);
  }

  // Append the section to the history container
  historyContainerEl.appendChild(sectionEl);
}