
//import { NavLink } from "nav-link";   Not supported in Chrome.

var navLinks = [
  new NavLink({ target: "index.html", label: "Home", inHtmlDir: false }),
  new NavLink({ target: "resume.html", label: "Résumé", externalLink: true }),
  new NavLink({ target: "responsive-web-design.html", label: "Responsive Web Design" }),
  new NavLink({ target: "css-position-attribute.html", label: "CSS Position Attribute" })
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
  $("header.page-header").prepend(createNavElement(isRootDir(window.location.pathname)));

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

function isRootDir (pathName) {

  var isRootDir = false;

  // If the path is just '/' then assume it's the root.
  if (pathName == "/") {
    isRootDir = true;
  } else {
    // Get the last element from the path (i.e., the file name) and split
    // it into parts by '.' so we can remove the file extension.  Why?
    // Just in case the default page name is index.htm rather than index.html
    var fileNameParts = pathName.split("/").pop().split(".");
    var fileNameNoExt = fileNameParts.slice(0, fileNameParts.length - 1).join("");
    if (fileNameNoExt == "index") {
      isRootDir = true;
    }
  }

  return isRootDir;
}

function createNavElement (inRootDir) {

  var nav = document.createElement("nav");

  // Add an anchor element for each link in the array.
  for (var i = 0; i < navLinks.length; ++i) {
    var anchor = navLinks[i].createAnchorElement(inRootDir);
    nav.appendChild(anchor);
  }

  return nav;
}
