import React, { Component } from "react";
import { render } from "react-dom";

class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.photo);
    return (
      <div className="characterCard" id={this.props.name}>
        <img className="photo" src={this.props.photo} />
        <div className="name">{this.props.name}</div>
        <div className="titleName">{this.props.title}</div>
        <a href={this.props.linkedin} className="footer-links">
          LinkedIn
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href={this.props.github} className="footer-links">
          GitHub
        </a>
      </div>
    );
  }
}

export default CharacterCard;
