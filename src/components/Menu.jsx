import React, { Component } from "react";
import "./components.scss";

class Menu extends Component {
    render() {
      return (
        <div className="menu-container">
          <button>
            <p>.about me</p>
          </button>
          <button>
            <p>.work</p>
          </button>
          <button>
            <p>.projects</p>
          </button>
          <button>
            <p>.contact</p>
          </button>
        </div>
      );
    }
  }
  
  export default Menu;
  