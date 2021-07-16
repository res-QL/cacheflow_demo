import React from 'react';

function NavBar() {
  return (
    <div id="NavBar">
      <div
        className="NavBarLinks"
        style={{
          display: 'inline-block',
          fontSize: '2.8rem',
          marginLeft: '10px',
        }}
      >
        {/* <div id="title">cacheflow</div> */}
        <div className="logo is-animetion" id="title">
          <span>c</span>
          <span>a</span>
          <span>c</span>
          <span>h</span>
          <span>e</span>
          <span>f</span>
          <span>l</span>
          <span>o</span>
          <span>w</span>
        </div>
      </div>
      <div
        className="NavBarLinks"
        style={{ display: 'inline-block', right: '0px' }}
      >
        <a href="#" style={{ marginRight: '40px' }}>
          <span
            className="hvr-underline-from-center"
            style={{ fontSize: '1.5rem' }}
          >
            <img
              style={{
                width: '60px',
                position: 'relative',
                top: '5px',
                marginRight: '10px',
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
            />
            npm
          </span>
        </a>

        <a href="#" style={{ marginRight: '40px' }}>
          <span
            className="hvr-underline-from-center"
            style={{ fontSize: '1.5rem' }}
          >
            <img
              style={{
                width: '25px',
                position: 'relative',
                top: '4px',
                marginRight: '10px',
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            />
            GitHub
          </span>
        </a>

        <a href="#" style={{ marginRight: '40px' }}>
          <span
            className="hvr-underline-from-center"
            style={{ fontSize: '1.5rem' }}
          >
            <img
              style={{
                width: '22px',
                position: 'relative',
                top: '1px',
                marginRight: '10px',
              }}
              src="https://www.svgrepo.com/show/110227/linkedin-big-logo.svg"
            />
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
