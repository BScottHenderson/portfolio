/* eslint-env browser */
/* exported Hobby, HobbyImageSection, HobbyImage */

class Hobby {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.name              = params.name              === undefined ? "" : params.name;
    this.id                = params.id                === undefined ? "" : params.id;
    this.imageSectionArray = params.imageSectionArray === undefined ? [] : params.imageSectionArray;
  }

  createListElement() {

    var li = document.createElement("li");
    var liText = document.createTextNode(this.name);

    li.appendChild(liText);

    var ul = document.createElement("ul");

    for (var i = 0; i < this.imageSectionArray.length; ++i) {
      var childLi = document.createElement("li");
      var anchor = this.imageSectionArray[i].createAnchorElement();

      childLi.appendChild(anchor);
      ul.appendChild(childLi);
    }

    li.appendChild(ul);

    return li;
  }

  createDivElement() {

    var div = document.createElement("div");

    div.setAttribute("id", this.id);

    var h3 = document.createElement("h3");
    var h3Text = document.createTextNode(this.name);

    h3.appendChild(h3Text);

    for (var i = 0; i < this.imageSectionArray.length; ++i) {
      var imageSection = this.imageSectionArray[i].createSectionElement();

      div.appendChild(imageSection);
    }

    return div;
  }

}

class HobbyImageSection {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.name       = params.name       === undefined ? "" : params.name;
    this.id         = params.id         === undefined ? "" : params.id;
    this.mapLink    = params.mapLink    === undefined ? "" : params.mapLink;
    this.imageArray = params.imageArray === undefined ? [] : params.imageArray;
  }

  createAnchorElement() {

    var anchor = document.createElement("a");
    var anchorText = document.createTextNode(this.name);

    anchor.setAttribute("href", "#" + this.id);
    // The "auto-expand-details" attribute is used to indicate links
    // that should automatically expand the Hobby Details section.
    anchor.setAttribute("auto-expand-details", "true");
    anchor.appendChild(anchorText);

    return anchor;
  }

  createSectionElement() {

    var section = document.createElement("section");

    section.setAttribute("id", this.id);

    var h4 = document.createElement("h4");
    var h4Text = document.createTextNode(this.name);
    var h4Anchor = document.createElement("a");

    h4Anchor.setAttribute("href", this.mapLink);
    h4Anchor.setAttribute("target", "_blank");

    var h4AnchorImage = document.createElement("img");

    h4AnchorImage.setAttribute("class", "logo");
    h4AnchorImage.setAttribute("src", "images/RTGG4pBqc.png");
    h4AnchorImage.setAttribute("alt", "Google Maps");

    h4Anchor.appendChild(h4AnchorImage);

    h4.appendChild(h4Text);
    h4.appendChild(h4Anchor);

    section.appendChild(h4);

    for (var i = 0; i < this.imageArray.length; ++i) {
      section.appendChild(this.imageArray[i].createAnchorElement(this.name));
    }

    return section;
  }

}

class HobbyImage {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.fileName = params.fileName === undefined ? "" : params.fileName;
  }

  createAnchorElement(altText) {

    var anchor = document.createElement("a");

    anchor.setAttribute("target", "_blank");  // Open in new tab.
    anchor.setAttribute("href", "images/" + this.fileName);

    var img = document.createElement("img");

    img.setAttribute("class", "camera");

    // need to strip fileExtension from this.filename
    var i = ~-this.fileName.lastIndexOf(".") >>> 0;
    // ~ bitwise NOT    >>> zero fill right shift
    var fn = this.fileName.substr(0, i + 1);

    img.setAttribute("src", "images/" + fn + "-400w.jpg");
    img.setAttribute("alt", altText);

    anchor.appendChild(img);

    return anchor;
  }

}
