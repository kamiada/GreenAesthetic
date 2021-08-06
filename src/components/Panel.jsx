import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";
import "./components.scss";

class Panel extends Component {
  render() {
    return (
      <div className="panel-container">
        <button>
        {this.props.gif && (
          <ReactImageFallback
            src={this.props.gif}
            fallbackImage="my-backup.png"
            alt={this.props.alt}
            className="image-panel"
          />
          )}
        </button>
      </div>
    );
  }
}

export default Panel;
