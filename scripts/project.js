/* eslint-env browser */
/* exported Projects, GitHubProject */
/* global _projects:false */

class Projects {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.name = params.name === undefined ? "" : params.name;
    this.projectArray = [
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

  createProjectElements() {

    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode(this.name);

    h2.appendChild(h2Text);

    var ul = document.createElement("ul");

    for (var i = 0; i < this.projectArray.length; ++i) {
      var li = this.projectArray[i].createListElement();

      ul.appendChild(li);
    }

    return [h2, ul];
  }

}

class GitHubProject {

  constructor(params) {
    params = params === undefined ? {} : params;
    this.name = params.name === undefined ? "" : params.name;
    this.repo = params.repo === undefined ? "" : params.repo;
  }

  createListElement() {

    var li = document.createElement("li");

    // Add an anchor element for the GitHub Pages site.
    var anchorGitHubPages = document.createElement("a");
    var anchorGitHubPagesText = document.createTextNode(this.name);
    var hrefGitHubPages = "https://bscotthenderson.github.io/" + this.repo + "/";

    anchorGitHubPages.setAttribute("href", hrefGitHubPages);
    anchorGitHubPages.setAttribute("target", "_blank");
    anchorGitHubPages.appendChild(anchorGitHubPagesText);

    li.appendChild(anchorGitHubPages);

    // Add an anchor for the GitHub repository.
    var anchorGitHub = document.createElement("a");
    var anchorGitHubImage = document.createElement("img");
    var hrefGitHubRepo = "https://github.com/BScottHenderson/" + this.repo;

    anchorGitHub.setAttribute("href", hrefGitHubRepo);
    anchorGitHub.setAttribute("target", "_blank");
    anchorGitHubImage.setAttribute("class", "logo");
    anchorGitHubImage.setAttribute("src", "images/GitHub-Mark-32px.png");
    anchorGitHubImage.setAttribute("alt", "GitHub");
    anchorGitHub.appendChild(anchorGitHubImage);

    li.appendChild(anchorGitHub);

    return li;
  }

}

var _projects = new Projects({ name: "Projects" });
