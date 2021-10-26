import React, { Component } from "react";
import "./components.scss";

class Panel extends Component {
  render() {
    return (
      <div className="panel-container">
        <button>
        <img className="image-panel" src={this.props.image} alt={this.props.alt}/>
        </button>
      </div>
    );
  }
}

export default Panel;
