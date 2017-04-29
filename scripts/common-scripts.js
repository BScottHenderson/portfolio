
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
  var today = new Date();
  document.getElementById("current-month").innerHTML =
    monthNames[today.getMonth()] + " " + today.getFullYear();

  // Update any elements with the "last-modified" id to the last modified date of the document.
  var lastModified = new Date(document.lastModified);
  var year  = lastModified.getFullYear();
  var month = lastModified.getMonth();
  var day   = lastModified.getDate();

  document.getElementById("last-modified").innerHTML =
    "<small>Last updated on <time datetime='" + year + "-" + month + "-" + day + "'>" + monthNames[month] + " " + day + ", " + year + "</time></small>";
});
