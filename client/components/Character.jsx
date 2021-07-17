import React, { Component } from 'react';
import { render } from 'react-dom';

class Character extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Footer">
        <div className="photo">
          <img
            style={{ width: '50px' }}
            src="https://pyxis.nymag.com/v1/imgs/260/250/46184df43c05ab8634927f8848667b5ca7-dolphin-beauty-lede.2x.rsocial.w600.jpg"
          />
        </div>
        <div className="characterCard">
          <p className="memberName"> King Ed 'dolphin master' Wang</p>
          <p className="memberName">Fullstack Engineer</p>
          <a href="https://www.linkedin.com/in/eddie-wang2/"> Linked In </a>
          <a href="https://github.com/eddie246"> GitHub </a>
        </div>
        <img
          style={{ width: '50px' }}
          src="https://static.wixstatic.com/media/82efd6_94cee280e1964ffba38cb4ea016f0278~mv2_d_6192_8256_s_4_2.jpg/v1/fill/w_560,h_746,al_c,q_85,usm_0.66_1.00_0.01/abigail-gjurich-7596.webp"
        />
        <div className="characterCard">
          <p className="memberName">Ian Gjurich </p>
          <p className="memberName">Fullstack Engineer</p>
          <a href="https://www.linkedin.com/in/ian-elliot-goodman/">
            {' '}
            Linked In{' '}
          </a>
          <a href="https://github.com/IanElliot"> GitHub </a>
        </div>
        <div className="photo">
          <img
            style={{ width: '50px' }}
            src="https://i.pinimg.com/280x280_RS/f4/b9/23/f4b92389e00b6de64ebc210949deb9b2.jpg"
          />
        </div>
        <div className="characterCard">
          <p className="memberName">Tyler 'spotifys sick right' Holdren</p>
          <p className="memberName">Fullstack Engineer</p>
          <a href="https://www.linkedin.com/in/tyler-holdren/"> Linked In </a>
          <a href="https://github.com/tyholdren"> GitHub </a>
        </div>
        <div className="photo">
          <img
            style={{ width: '50px' }}
            src="https://pbs.twimg.com/profile_images/2930975978/93e5eeb2a2fcae8fb305d588805a774c.jpeg"
          />
        </div>

        <div className="characterCard">
          <p className="memberName">Walker Marsh</p>
          <p className="memberName">Fullstack Engineer</p>
          <a href="https://www.linkedin.com/in/walkervemarsh/"> Linked In </a>
          <a href="https://github.com/WalkerMarsh"> GitHub </a>
        </div>
      </div>
    );
  }
}

export default Character;
