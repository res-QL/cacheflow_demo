import React, { Component } from "react";
import ReactDOM from "react-dom";

class Intro extends Component {
  constructor(props, stickyPos) {
    super(props);

    this.stickyPos = 0;
    this.state = { copySuccess: "" };
  }

  componentDidMount() {
    this.stickyPos =
      document.querySelector("#introParent").offsetTop +
      document.querySelector("#introParent").offsetHeight;

    window.onscroll = function () {
      checkNavPos();
    };

    const checkNavPos = () => {
      if (window.pageYOffset >= this.stickyPos) {
        document.querySelector(".NavBar").classList.add("navFade");
      } else {
        document.querySelector(".NavBar").classList.remove("navFade");
      }
    };
  }
  copyToClipboard = (e) => {
    const textField = document.createElement("textarea");
    textField.innerText = "npm install cacheflowql";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    document.getElementById(
      "copyLogo"
    ).innerHTML = `<path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>`;
  };

  render() {
    return (
      <div id="introParent">
        <div className="centerText">
          <p className="introTitle">
            ...a lightweight npm package providing developers insight into
            GraphQL queries and metrics concerning cached data
          </p>
          {
            <p className="introParagraph">
              Current caching solutions are inflexible as they only offer users
              the ability to cache data, in lieu of requesting it from their
              respective API or database. CacheflowQL gives developers more
              control, providing them the ability to specify thresholds upon
              which data can be cached to their specified locations.
            </p>
          }

          <div id="downloadNpmTxt">Download the NPM Package</div>
          <center id="downloadContainer">
            <div
              className="downloadPkg Icon Grouping"
              onClick={this.copyToClipboard}
            >
              <code id="npmInstall">npm install cacheflowql</code> &nbsp;&nbsp;
              <svg
                id="copyLogo"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                // fill="#505be4"
                class="bi bi-clipboard"
                viewBox="0 0 16 16"
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </div>
          </center>

          <div>
            <a href="https://google.com" target="_blank">
              <button>Read our Medium Article</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
