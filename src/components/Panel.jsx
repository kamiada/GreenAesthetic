import React, { Component } from "react";
import "./components.scss";
import { Popup } from ".";

class Panel extends Component {

  openPopup = (desc) => {
    console.log('here');
    console.log(desc);
    if(desc) {
      <Popup description={desc}/>
    }
  }
  render() {
    return (
      <button className="parent_square" onClick={this.props.onClick}>
        <img className="square" src={this.props.image} alt={this.props.alt} />
        <div className="overlay">
          <div class="sliding_text"> 
          {
            this.props.link ? 
            <a className="details_holder" href={this.props.link}>
              {this.props.projectTitle}
            </a>
            :
            <Popup title={this.props.projectTitle} description={this.props.description}/>
          }
           
            {this.props.tags &&
              this.props.tags.map((tag) => {
                return (
                  <div className="tag_container">
                    <div className="tag">{tag}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </button>
    );
  }
}

export default Panel;
