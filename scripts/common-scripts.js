/* eslint-env browser, jquery */
/* global NavLink, Hobby, HobbyImageSection, HobbyImage */

//import { NavLink } from "nav-link";   Not supported in Chrome.
//import { Hobby, HobbyImageSection, HobbyImage } from "hobby";
//import { GitHubProject } from "project";

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

// Define an array of NavLink objects to use at the top of the page.
var navLinks = [];

if (typeof NavLink === "function") {
  navLinks = [
    new NavLink({ target: "index.html", label: "Home", inHtmlDir: false }),
    new NavLink({ target: "resume.html", label: "Résumé", externalLink: true }),
    new NavLink({ target: "responsive-web-design.html", label: "Responsive Web Design" }),
    new NavLink({ target: "css-position-attribute.html", label: "CSS Position Attribute" })
  ];
}

// Define an array of GitHubProject objects to be included in the page.
var projectArray = [];

if (typeof GitHubProject === "function") {
  projectArray = [
    new GitHubProject({
      name: "HTML5 &amp; CSS3 Mockup Practice",
      repo: "mockup-practice"
    }),
    new GitHubProject({
      name: "STP Archery",
      repo: "stp-archery"
    }),
    new GitHubProject({
      name: "Winter Wear Warehouse",
      repo: "html200-ecomm-spr17"
    })
  ];
}

// Define an array of Hobby objects to be included in the page.
var hobbyArray = [];

if (typeof Hobby === "function") {
  hobbyArray = [
    new Hobby({
      name: "Golfing",
      id: "golfing",
      imageSectionArray: [
        new HobbyImageSection({
          name: "Aldarra Golf Club",
          id: "aldarra",
          mapLink: "https://www.google.com/maps/place/Aldarra+Golf+Club/@47.5848109,-121.9557935,17z/data=!3m1!4b1!4m5!3m4!1s0x54907058a13b0f0d:0xd1615dcbc4da2d0d!8m2!3d47.5848109!4d-121.9536048",
          imageArray: [
            new HobbyImage({ fileName: "golf/aldarra/20141002_135756.jpg" }),
            new HobbyImage({ fileName: "golf/aldarra/20160629_113623.jpg" })
          ]
        }),
        new HobbyImageSection({
          name: "Bear Mountain Ranch",
          id: "bear-mountain-ranch",
          mapLink: "https://www.google.com/maps/place/Bear+Mountain+Ranch/@47.8330362,-120.1284124,17z/data=!3m1!4b1!4m5!3m4!1s0x549b9ef94addc94f:0x863f9b91dea1fed3!8m2!3d47.8330362!4d-120.1262237",
          imageArray: [
            new HobbyImage({ fileName: "golf/bear-mountain-ranch/20160616_110409.jpg" }),
            new HobbyImage({ fileName: "golf/bear-mountain-ranch/20160616_115424.jpg" }),
            new HobbyImage({ fileName: "golf/bear-mountain-ranch/20160616_121206.jpg" }),
            new HobbyImage({ fileName: "golf/bear-mountain-ranch/20160616_143452.jpg" })
          ]
        }),
        new HobbyImageSection({
          name: "Canterwood Golf &amp; Country Club",
          id: "canterwood",
          mapLink: "https://www.google.com/maps/place/Canterwood+Country+Club/@47.3728382,-122.6123552,17z/data=!3m1!4b1!4m5!3m4!1s0x54904d73556512f3:0x22f20374208fd3af!8m2!3d47.3728382!4d-122.6101665",
          imageArray: [
            new HobbyImage({ fileName: "golf/canterwood/20160522_144809.jpg" }),
            new HobbyImage({ fileName: "golf/canterwood/20160522_152733.jpg" }),
            new HobbyImage({ fileName: "golf/canterwood/20160522_162818.jpg" })
          ]
        }),
        new HobbyImageSection({
          name: "Cascata",
          id: "cascata",
          mapLink: "https://www.google.com/maps/place/Cascata+Golf+Course/@35.9768336,-114.8942415,17z/data=!3m1!4b1!4m5!3m4!1s0x80c92aa4d726378b:0xd86bc59a63fc9e24!8m2!3d35.9768336!4d-114.8920528",
          imageArray: [
            new HobbyImage({ fileName: "golf/cascata/20161003_105443.jpg" }),
            new HobbyImage({ fileName: "golf/cascata/20161003_144101.jpg" }),
            new HobbyImage({ fileName: "golf/cascata/20161003_145054.jpg" })
          ]
        }),
        new HobbyImageSection({
          name: "Chambers Bay Golf Course",
          id: "chambers-bay",
          mapLink: "https://www.google.com/maps/place/Chambers+Bay/@47.2004072,-122.5727484,17z/data=!3m1!4b1!4m5!3m4!1s0x5491aa737cf00391:0xe446730d39a18895!8m2!3d47.2004036!4d-122.5705597",
          imageArray: [
            new HobbyImage({ fileName: "golf/chambers-bay/20160915_160450.jpg" }),
            new HobbyImage({ fileName: "golf/chambers-bay/20160915_161020.jpg" }),
            new HobbyImage({ fileName: "golf/chambers-bay/20160915_162411.jpg" })
          ]
        })
      ]
    }),
    new Hobby({
      name: "Hiking",
      id: "hiking",
      imageSectionArray: [
        new HobbyImageSection({
          name: "Mount Si Trail",
          id: "mount-si",
          mapLink: "https://www.google.com/maps/place/Mount+Si+Trailhead+parking/@47.4880751,-121.7254291,17z/data=!3m1!4b1!4m5!3m4!1s0x54907e67eaff2573:0x21683d7d00f595c4!8m2!3d47.4876996!4d-121.7233274",
          imageArray: [
            new HobbyImage({ fileName: "hiking/mount-si/20160503_113920.jpg" }),
            new HobbyImage({ fileName: "hiking/mount-si/20160503_114513.jpg" }),
            new HobbyImage({ fileName: "hiking/mount-si/20160503_114555.jpg" })
          ]
        }),
        new HobbyImageSection({
          name: "Rattlesnake Ledge",
          id: "rattlesnake-ledge",
          mapLink: "https://www.google.com/maps/place/Rattlesnake+Ledge/@47.4352832,-121.7921369,14.5z/data=!4m5!3m4!1s0x5490878218fa41d5:0x7a62bcd0406bd565!8m2!3d47.436126!4d-121.7785455",
          imageArray: [
            new HobbyImage({ fileName: "hiking/rattlesnake-ledge/20160916_125231.jpg" }),
            new HobbyImage({ fileName: "hiking/rattlesnake-ledge/20160916_125240.jpg" })
          ]
        })
      ]
    })
  ];
}

$(document).ready(function() {

  // Add <nav> section to page-header.
  $("header.page-header").prepend(createNavElement(isRootDir(window.location.pathname)));

  // Update any elements with the "current-month" id to the current month.
  $("#current-month").text(function() {
    var today = new Date();

    return monthNames[today.getMonth()] + " " + today.getFullYear();
  });

  // Update any elements with the "last-modified" id to the last modified date of the document.
  $("#last-modified").html(function() {

    var lastModified = new Date(document.lastModified);

    var year  = lastModified.getFullYear();
    var month = lastModified.getMonth();
    var day   = lastModified.getDate();

    var html  =
      "<small>Last updated on <time datetime='" + year + "-" + month + "-" + day + "'>" +
      monthNames[month] + " " + day + ", " + year + "</time></small>";

    return html;

  });

  addProjectElements();
  addHobbyElements();
});

function isRootDir(pathName) {

  var isRootDir = false;

  // If the path is just '/' then assume it's the root.
  if (pathName === "/") {
    isRootDir = true;
  } else {
    // Get the last element from the path (i.e., the file name) and split
    // it into parts by '.' so we can remove the file extension.  Why?
    // Just in case the default page name is index.htm rather than index.html
    var fileNameParts = pathName.split("/").pop().split(".");
    var fileNameNoExt = fileNameParts.slice(0, fileNameParts.length - 1).join("");

    if (fileNameNoExt === "index") {
      isRootDir = true;
    }
  }

  return isRootDir;
}

function createNavElement(inRootDir) {

  var nav = document.createElement("nav");

  // Add an anchor element for each link in the array.
  for (var i = 0; i < navLinks.length; ++i) {
    var anchor = navLinks[i].createAnchorElement(inRootDir);

    nav.appendChild(anchor);
  }

  return nav;
}

function addProjectElements() {

  var ul = $("#projects")[0];

  if (!ul)
    return;

  for (var i = 0; i < projectArray.length; ++i) {
    var li = projectArray[i].createListElement();

    ul.appendChild(li);
  }
}

function addHobbyElements() {

  var ul = $("#hobbies")[0];

  if (!ul)
    return;

  // Enclose hobby details (e.g., pictures) in a details element.
  var details = document.createElement("details");
  var detailsSummary = document.createElement("summary");
  var detailsSummaryText = document.createTextNode("Hobby Details");

  detailsSummary.appendChild(detailsSummaryText);
  details.appendChild(detailsSummary);

  // We're building two separate areas of the document here:
  // 1. A list of list elements to be included as children of the selected element.
  // 2. A list of div elements to be included after the selected element.
  for (var i = 0; i < hobbyArray.length; ++i) {
    var li = hobbyArray[i].createListElement();
    var div = hobbyArray[i].createDivElement();

    ul.appendChild(li);
    details.appendChild(div);
  }

  ul.after(details);

  // Since our in-page links won't work if the details element
  // is closed we'll just open it when the user clicks on a link.
  $("[auto-expand-details]").on("click", function () {
    //$( $(this).attr("href") ).trigger("click");
    details.setAttribute("open", "open");
  });
}
