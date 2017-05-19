
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
        ? (this.inHtmlDir ? "./html" : ".")
        : (this.inHtmlDir ? "." : ".."))
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
