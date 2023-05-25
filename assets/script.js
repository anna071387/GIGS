
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

