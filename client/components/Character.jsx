import React, { Component } from 'react';
import { render } from 'react-dom';

class Character extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <div id="meetEngineers">Meet the Product Engineers</div>

        <div id="characterContainer">
          <div className="characterCard">
            <img
              className="photo"
              style={{ width: '100px' }}
              src="https://pyxis.nymag.com/v1/imgs/260/250/46184df43c05ab8634927f8848667b5ca7-dolphin-beauty-lede.2x.rsocial.w600.jpg"
            />
            <h3 className="memberName">
              <b>Eddie Wang</b>
            </h3>
            <p className="titleName">Fullstack Engineer</p>
            <a href="https://www.linkedin.com/in/eddie-wang2/"> LinkedIn </a>|
            <a href="https://github.com/eddie246"> GitHub </a>
          </div>
          <div className="characterCard">
            <img
              className="photo"
              style={{ width: '100px' }}
              src="https://static.wixstatic.com/media/82efd6_94cee280e1964ffba38cb4ea016f0278~mv2_d_6192_8256_s_4_2.jpg/v1/fill/w_560,h_746,al_c,q_85,usm_0.66_1.00_0.01/abigail-gjurich-7596.webp"
            />
            <h3 className="memberName">
              <b>Ian Goodman </b>
            </h3>
            <p className="titleName">Fullstack Engineer</p>
            <a href="https://www.linkedin.com/in/ian-elliot-goodman/">
              {' '}
              LinkedIn{' '}
            </a>
            |<a href="https://github.com/IanElliot"> GitHub </a>
          </div>
          <div className="characterCard">
            <img
              className="photo"
              style={{ width: '100px' }}
              src="https://i.pinimg.com/280x280_RS/f4/b9/23/f4b92389e00b6de64ebc210949deb9b2.jpg"
            />
            <h3 className="memberName">
              <b>Tyler Holdren</b>
            </h3>
            <p className="titleName">Fullstack Engineer</p>
            <a href="https://www.linkedin.com/in/tyler-holdren/"> LinkedIn </a>|
            <a href="https://github.com/tyholdren"> GitHub </a>
          </div>

          <div className="characterCard">
            <img
              className="photo"
              src="https://pbs.twimg.com/profile_images/2930975978/93e5eeb2a2fcae8fb305d588805a774c.jpeg"
            />
            <h3 className="memberName">
              <b>Walker Marsh</b>
            </h3>
            <p className="titleName">Fullstack Engineer</p>
            <a href="https://www.linkedin.com/in/walkervemarsh/"> LinkedIn </a>|
            <a href="https://github.com/WalkerMarsh"> GitHub </a>
          </div>
        </div>
        <center>
          <div id="footerEnd">
            Product Development Accelerated by{' '}
            <a className="footerAnchors" href="https://opensourcelabs.io/">
              OS Labs
            </a>{' '}
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Issues or concerns? Report
            them to our{' '}
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
