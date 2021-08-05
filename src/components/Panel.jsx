import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";
import "./components.scss";

class Panel extends Component {
  render() {
    return (
      <div className="panel-container">
        <button>
          <ReactImageFallback
            src="my-image.png"
            fallbackImage="my-backup.png"
            initialImage="loader.gif"
            alt="cool image should be here"
            className="image-panel"
          />
        </button>
      </div>
    );
  }
}

export default Panel;
