/* eslint-env browser, jquery */
/* exported Hobbies, Hobby, HobbyImageSection, HobbyImage */
/* global _hobbies:false */

class Hobbies {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.name = params.name === undefined ? "" : params.name;
    this.hobbyArray = [
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
            name: "Canterwood Golf & Country Club",
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

  createHobbyElements() {
    // <h2>Hobbies</h2>
    // <ul>
    //   <li>
    //     hobby 0 name
    //     <ul>
    //       <hobby 0 list element 0 />
    //       <hobby 0 list element 1 />
    //       ...
    //       <hobby 0 list element n />
    //     </ul>
    //   </li>
    //   ...
    // </ul>
    // <details id="hobby-details">
    //   <summary>Hobby Details</summary>
    //   <hobby 0 div>
    //   <hobby 1 div>
    //   ...
    //   <hobby n div>
    // </details>
    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode(this.name);

    h2.appendChild(h2Text);

    var ul = document.createElement("ul");

    // Enclose hobby details (e.g., pictures) in a details element.
    var details = document.createElement("details");
    var detailsSummary = document.createElement("summary");
    var detailsSummaryText = document.createTextNode("Hobby Details");

    detailsSummary.appendChild(detailsSummaryText);
    details.setAttribute("id", "hobby-details");
    details.appendChild(detailsSummary);

    // We're building two separate areas of the document here:
    // 1. A list of list elements to be included as children of the selected element.
    // 2. A list of div elements to be included after the selected element.
    for (var i = 0; i < this.hobbyArray.length; ++i) {
      var li = this.hobbyArray[i].createListElement();
      var div = this.hobbyArray[i].createDivElement();

      ul.appendChild(li);
      details.appendChild(div);
    }

    return [h2, ul, details];
  }

}

Hobbies.prototype.addClickHandlerForDetails = function () {
  // Since our in-page links won't work if the details element
  // is closed we'll just open it when the user clicks on a link.
  $("[auto-expand-details]").on("click", function () {
    //$( $(this).attr("href") ).trigger("click");
    $("#hobby-details").attr("open", "open");
  });
};

class Hobby {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.name              = params.name              === undefined ? "" : params.name;
    this.id                = params.id                === undefined ? "" : params.id;
    this.imageSectionArray = params.imageSectionArray === undefined ? [] : params.imageSectionArray;
  }

  createListElement() {
    // <li>
    //   Golf Courses
    //   <ul>
    //     <li><image section anchor 0></li>
    //     <li><image section anchor 1></li>
    //     ...
    //     <li><image section anchor n></li>
    //   </ul>
    // </li>
    var li = document.createElement("li");
    var liText = document.createTextNode(this.name);

    li.appendChild(liText);

    var ul = document.createElement("ul");

    for (var i = 0; i < this.imageSectionArray.length; ++i) {
      var childLi = this.imageSectionArray[i].createListElement();

      ul.appendChild(childLi);
    }

    li.appendChild(ul);

    return li;
  }

  createDivElement() {
    // <div id="golf-courses">
    //   <h3>Golf Courses</h3>
    //   <image section 0 />
    //   <image section 1 />
    //   ...
    //   <image section n />
    // </div>
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

  createListElement() {
    // <li><a href="#aldarra" auto-expand-details="true">Aldarra Golf Club</a></li>
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    var anchorText = document.createTextNode(this.name);

    anchor.setAttribute("href", "#" + this.id);
    // The "auto-expand-details" attribute is used to indicate links
    // that should automatically expand the Hobby Details section.
    anchor.setAttribute("auto-expand-details", "true");
    anchor.appendChild(anchorText);

    li.appendChild(anchor);

    return li;
  }

  createSectionElement() {
    // <section id="aldarra">
    //   <h4>
    //     Aldarra Golf Club
    //     <a href="https://www.google.com/maps/place/Aldarra+Golf+Club/@47.5848109,-121.9557935,17z/data=!3m1!4b1!4m5!3m4!1s0x54907058a13b0f0d:0xd1615dcbc4da2d0d!8m2!3d47.5848109!4d-121.9536048" target="_blank">
    //       <img class="logo" src="images/RTGG4pBqc.png" alt="Google Maps"/>
    //     </a>
    //   </h4>
    //   <image anchor 0 />
    //   <image anchor 1 />
    //   ...
    //   <image anchor n />
    // </section>
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
    // <a target="_blank" href="images/golf/aldarra/20141002_135756.jpg">
    //   <img class="camera" src="images/golf/aldarra/20141002_135756-400w.jpg" alt="Aldarra Golf Club" />
    // </a>
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

var _hobbies = new Hobbies({ name: "Hobbies" });
