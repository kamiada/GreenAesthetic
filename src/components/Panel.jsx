import React, { Component } from "react";
import "./components.scss";

class Panel extends Component {
  render() {
    return (

      <button className="parent_square" onClick={this.props.onClick}>
        <img className="square" src={this.props.image} alt={this.props.alt}/>
      </button>
    );
  }
}

export default Panel;
