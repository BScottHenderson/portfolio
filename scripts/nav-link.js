/* eslint-env browser */
/* exported NavLinks, NavLink */
/* global _navLinks:false */

class NavLinks {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.name = params.name === undefined ? "" : params.name;
    this.navLinkArray = [
      new NavLink({ target: "index.html", label: "Home", inHtmlDir: false }),
      new NavLink({ target: "resume.html", label: "Résumé", externalLink: true }),
      new NavLink({ target: "responsive-web-design.html", label: "Responsive Web Design" }),
      new NavLink({ target: "css-position-property.html", label: "CSS Position Property" })
    ];
  }

  createNavElement() {

    var nav = document.createElement("nav");

    // Add an anchor element for each link in the array.
    for (var i = 0; i < this.navLinkArray.length; ++i) {
      var anchor = this.navLinkArray[i].createAnchorElement();

      nav.appendChild(anchor);
    }

    return nav;
  }
}

class NavLink {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.target       = params.target       === undefined ? ""    : params.target;
    this.label        = params.label        === undefined ? ""    : params.label;
    this.externalLink = params.externalLink === undefined ? false : params.externalLink;
    // If not in 'html' subdirectory, assume root directory.
    this.inHtmlDir    = params.inHtmlDir    === undefined ? true  : params.inHtmlDir;
  }

  createAnchorElement() {

    var anchor = document.createElement("a");

    // The href to the target file depends on whether or not
    // the current file is in the 'html' directory and whether
    // or not the target file is in the 'html' directory.
    // Assume that all HTML files are either in the root directory
    // or the 'html' directory.
    var href =
      this.inDir("html")
      ? this.inHtmlDir ? this.getBaseUrl() + this.target : this.getBaseUrl() + "../" + this.target
      : this.inHtmlDir ? this.getBaseUrl() + "html/" + this.target : this.getBaseUrl() + this.target;

    anchor.setAttribute("href", href);

    // Special handling for the 'external-link' class.
    if (this.externalLink) {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("class", "link external-link");

      // The 'external-link' class will display the text in
      // a <span> child node when the mouse hovers over the
      // anchor.
      var span = document.createElement("span");
      var spanText = document.createTextNode("Opens a new window");

      span.appendChild(spanText);
      anchor.appendChild(span);
    } else {
      anchor.setAttribute("class", "link");
    }

    // Add a label for the anchor (this is what the user sees).
    var anchorLabel = document.createTextNode(this.label);

    anchor.appendChild(anchorLabel);

    return anchor;
  }

}

NavLink.prototype.getBaseUrl = function () {
  var re = new RegExp(/^.*\//);

  return re.exec(window.location.href);
};

NavLink.prototype.inDir = function(dirName) {

  // Use index 1 rather than 0 because the window.location.pathName
  // will return a string that begins with '/' so the first array
  // element (index 0) resulting from the call to split() will be empty.
  var topDir = window.location.pathname.split("/")[1];

  return topDir === dirName;
};

var _navLinks = new NavLinks();
