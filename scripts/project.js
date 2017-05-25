/* eslint-env browser */
/* exported GitHubProject */

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
