
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

$(document).ready(function() {
  // Update any elements with the "current-month" id to the current month.
  today = new Date();
  document.getElementById("current-month").innerHTML = monthNames[today.getMonth()] + " " + today.getFullYear();
});
