import React, { Component } from "react";
import "./components.scss";

class Tile extends Component {
  render() {
    return (
      <div className="">
        <img className="" src={this.props.image} alt={this.props.alt} />
        {/* {this.props.list &&
          this.props.list.map((element) => (
            <ul>
              <li>{element.job}</li>
              <li>{element.point_1}</li>
              {element.point_2 ? 
              (
                <li>{element.point_2}</li>
              ) : null}
            </ul>
          ))} */}
          
      </div>
    );
  }
}

export default Tile;
