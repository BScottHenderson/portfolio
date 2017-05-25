/* eslint-env browser, jquery */
/* global  _navLinks, Projects, _projects, Hobbies, _hobbies */

// ***Import not supported in Chrome.***
//import { NavLink } from "nav-link";
//import { Hobbies } from "hobby";
//import { Projects } from "project";

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
  $("header.page-header").prepend(_navLinks.createNavElement(window.location.pathname));

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

  if (typeof Projects === "function" && typeof _projects !== "undefined") {
    _projects.createProjectElements().forEach(function (element) {
      $("#main-article").append(element);
    });
  }

  if (typeof Hobbies === "function" && typeof _hobbies !== "undefined") {
    _hobbies.createHobbyElements().forEach(function (element) {
      $("#main-article").append(element);
    });
    _hobbies.addClickHandlerForDetails();
  }
});
