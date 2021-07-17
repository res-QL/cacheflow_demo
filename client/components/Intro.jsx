import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Intro extends Component {
  constructor(props, stickyPos) {
    super(props);

    this.stickyPos = 0;
    this.state = { copySuccess: '' };
  }

  componentDidMount() {
    this.stickyPos =
      document.querySelector('#introParent').offsetTop +
      document.querySelector('#introParent').offsetHeight;

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
  copyToClipboard = e => {
    const textField = document.createElement('textarea');
    textField.innerText = 'npm install cacheflowql';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  render() {
    return (
      <div id="introParent">
        <div className="centerText">
          <p className="introTitle">
            The cacheflowQL library is a lightweight middleware package that
            allows smart caching on GraphQL servers
          </p>
          <p className="introParagraph">
            Current caching solutions are inflexible as they only offer users
            the ability to cache data, in lieu of requesting it from their
            respective API or database. Though an issue arises when users
            request certain information infrequently, as the benefits of caching
            become marginal. CacheflowQL gives developers more control,
            providing them the ability to specify thresholds upon which data can
            be cached to their specified locations.
          </p>
          <div>
            <button onClick={this.copyToClipboard}>
              Copy and Paste to Terminal
            </button>
            <a href="https://google.com" target="_blank">
              <button>Read our Medium Article!</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
