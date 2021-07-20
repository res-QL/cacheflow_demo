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
              "https://pbs.twimg.com/profile_images/2930975978/93e5eeb2a2fcae8fb305d588805a774c.jpeg"
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
            linkedin={"https://github.com/tyholdren"}
            github={"https://github.com/tyholdren"}
          />
          <CharacterCard
            photo={"https://avatars.githubusercontent.com/u/81332301?v=4"}
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
