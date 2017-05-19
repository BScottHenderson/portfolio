
var navLinks = [
  {
    "target": "index.html",
    "label": "Home",
    "externalLink": false
  },
  {
    "target": "resume.html",
    "label": "Résumé",
    "externalLink": true
  },
  {
    "target": "responsive-web-design.html",
    "label": "Responsive Web Design",
    "externalLink": false
  },
  {
    "target": "css-position-attribute.html",
    "label": "CSS Position Attribute",
    "externalLink": false
  }
];

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

  // Add <nav> section to page-header.
  var homePage =
    window.location.pathname.split("/").pop() == navLinks[0].target;
  $("header.page-header").prepend(constructNavElement(homePage));

  // Update any elements with the "current-month" id to the current month.
  var today = new Date();
  $("#current-month").text(
    monthNames[today.getMonth()] + " " + today.getFullYear());

  // Update any elements with the "last-modified" id to the last modified date of the document.
  var lastModified = new Date(document.lastModified);
  var year  = lastModified.getFullYear();
  var month = lastModified.getMonth();
  var day   = lastModified.getDate();

  $("#last-modified").html(
    "<small>Last updated on <time datetime='" + year + "-" + month + "-" + day + "'>" +
    monthNames[month] + " " + day + ", " + year + "</time></small>");
});

/*
  <a href="./index.html" class="link">Home</a>
  <a href="./html/resume.html" target="_blank" class="external-link">Résumé<span>Opens a new window</span></a>
  <a href="./html/responsive-web-design.html" class="link">Responsive Web Design</a>
  <a href="./html/css-position-attribute.html" class="link">CSS Position Attribute</a>
*/

function constructNavElement (homePage) {

  var navSection = "<nav>";

  for (var i = 0; i < navLinks.length; ++i) {

    navSection += "<a href='";

    // The location of the target file depends on whether or
    // not the current document is the home page.  The home
    // page lives in the root directory, all others live in
    // the html subdirectory.
    navSection +=
      (homePage
        ? ((i == 0) ? "." : "./html")
        : ((i == 0) ? ".." : "."))
    navSection += "/" + navLinks[i].target + "'";

    // Special handling for the 'external-link' class.
    if (navLinks[i].externalLink) {
      navSection += " target='_blank' class='link external-link'>" + navLinks[i].label;
      navSection += "<span>Opens a new window</span>";
    } else {
      navSection += " class='link'>" + navLinks[i].label;
    }

    navSection += "</a>";
  }

  navSection += "</nav";

  return navSection;
}
