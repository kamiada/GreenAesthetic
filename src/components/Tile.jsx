import React, { Component } from "react";
import "./components.scss";

class Tile extends Component {
  render() {
    return (
      <div className="tile_container">
        <div>{this.props.image}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
export default Tile;
