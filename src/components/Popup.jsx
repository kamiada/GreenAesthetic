import React, { Component, Fragment } from "react";
import "./components.scss";

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itsActive: false,
        }
        this.derenderSubpagelta = this.renderSubpage.bind(this);
        this.closeSubpage = this.closeSubpage.bind(this);
    }
    renderSubpage = () => {
        this.setState({
            itsActive: true,
        });
    }
    closeSubpage = () => {
      this.setState({
        itsActive: false,
      });
    }
  render() {
    return (
      <div>
        <button onClick={this.renderSubpage} className="smallTitle">
          <h2>{this.props.title}</h2>
        </button>
        <Fragment>
        <div className={this.state.itsActive ? 'miniPage--active': 'miniPage'} >
            <p>testing</p>
            <button onClick={this.closeSubpage} className="btnClose">
            Close
            </button>
        </div>
      </Fragment>
      </div>
    );
  }
}

export default Popup;