import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Intro extends Component {
  constructor(props, stickyPos) {
    super(props);

    this.stickyPos = 0;
  }

  componentDidMount() {
    this.stickyPos = document.querySelector('.demoContainer').offsetTop;
    console.log(this);

    window.onscroll = function () {
      checkNavPos();
    };

    const checkNavPos = () => {
      if (window.pageYOffset >= this.stickyPos) {
        console.log('fire');
        document.querySelector('.NavBar').classList.add('navFade');
      } else {
        document.querySelector('.NavBar').classList.remove('navFade');
      }
    };
  }

  render() {
    return (
      <div id="introParent">
        <h1>
          The cacheflowQL library is a super lightweight middleware package that
          allows smart caching on GraphQL servers
        </h1>
        <p>
          Current caching solutions are limited as they only offer users the
          ability to cache data or not. If users request certain information
          infrequently, the benefits of caching are marginal. Therefore it is
          important to prevent caching until we know the time savings will be
          worth the space.
        </p>
        <p>'THIS PRODUCT LITERALLY SAVED MY LIFE' - Will Sentance</p>
      </div>
    );
  }
}

export default Intro;
