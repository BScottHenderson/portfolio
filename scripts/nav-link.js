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

  createNavElement(currentPagePathName) {

    console.log("createNavElement: currentPagePathName='" + currentPagePathName + "'");
    var nav = document.createElement("nav");

    // Add an anchor element for each link in the array.
    for (var i = 0; i < this.navLinkArray.length; ++i) {
      var inRootDir = this.isRootDir(currentPagePathName);
      var anchor = this.navLinkArray[i].createAnchorElement(inRootDir);

      nav.appendChild(anchor);
    }

    return nav;
  }
}

NavLinks.prototype.isRootDir = function(pathName) {

  console.log("isRootDir: pathName='" + pathName + "'");
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

    console.log("isRootDir: fileNameParts='" + fileNameParts + "'");
    console.log("isRootDir: fileNameNoExt='" + fileNameNoExt + "'");
    if (fileNameNoExt === "index") {
      isRootDir = true;
    }
  }

  return isRootDir;
};

class NavLink {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.target       = params.target       === undefined ? ""    : params.target;
    this.label        = params.label        === undefined ? ""    : params.label;
    this.externalLink = params.externalLink === undefined ? false : params.externalLink;
    // If not in 'html' subdirectory, assume root directory.
    this.inHtmlDir    = params.inHtmlDir    === undefined ? true  : params.inHtmlDir;
  }

  createAnchorElement(inRootDir) {

    var anchor = document.createElement("a");

    // The location of the target file depends on whether or
    // not the current document is the home page.  The home
    // page lives in the root directory, all others live in
    // the html subdirectory.
    var href =
      (inRootDir
        ? this.inHtmlDir ? "./html" : "."
        : this.inHtmlDir ? "." : "..")
      + "/" + this.target;

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

var _navLinks = new NavLinks();
