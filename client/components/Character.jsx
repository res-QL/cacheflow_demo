import React, { Component } from "react";
import { render } from "react-dom";
import CharacterCard from "./CharacterCard.jsx";

class Character extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <div id="meetEngineers">Meet the Product Engineers</div>
        <div className="CharacterContainer">
          <CharacterCard
            photo={
              "https://avatars.githubusercontent.com/u/72237708?s=400&u=b24f5605c36c74b80afa342c5e722ba8106b2486&v=4"
            }
            name={"Eddie Wang"}
            title={"Fullstack Engineer"}
            linkedin={"https://www.linkedin.com/in/eddie-wang2/"}
            github={"https://github.com/eddie246"}
          />
          <CharacterCard
            photo={
              "https://avatars.githubusercontent.com/u/69546323?s=400&u=d1120240e619c22121a30d4c7bd428eb86eb9823&v=4"
            }
            name={"Ian Goodman"}
            title={"Fullstack Engineer"}
            linkedin={"https://www.linkedin.com/in/ian-elliot-goodman/"}
            github={"https://github.com/IanElliot"}
          />
          <CharacterCard
            photo={"https://avatars.githubusercontent.com/u/77170645?v=4"}
            name={"Tyler Holdren"}
            title={"Fullstack Engineer"}
            linkedin={"https://www.linkedin.com/in/tyler-holdren/"}
            github={"https://github.com/tyholdren"}
          />
          <CharacterCard
            photo={
              "https://avatars.githubusercontent.com/u/81332301?s=400&u=8a4885ba8e79f83684a7a989876d799055bc3d02&v=4"
            }
            name={"Walker Marsh"}
            title={"Fullstack Engineer"}
            linkedin={"https://www.linkedin.com/in/walkervemarsh/"}
            github={"https://github.com/WalkerMarsh"}
          />
        </div>
        <center>
          <div id="footerEnd">
            Product Development Accelerated by{" "}
            <a className="footerAnchors" href="https://opensourcelabs.io/">
              OS Labs
            </a>{" "}
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Issues or concerns? Report
            them to our{" "}
            <a
              className="footerAnchors"
              href="https://github.com/oslabs-beta/cacheflow/issues"
            >
              GitHub
            </a>
          </div>
        </center>
      </div>
    );
  }
}

export default Character;
