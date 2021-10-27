import React, { Fragment } from "react";
import { Layout } from "../../components";
import "./about_me.scss";
import { text } from "./aboutme.json";
import { photo } from "../../images";

const aboutMe = () => {
  return (
    <Fragment>
      <div className="background_layout">
        <main></main>
      </div>
      <div className="layout_aboutme">
      <main>
        <div id="about" className="page_container">
          <div className="exact_container">
            <div className="picture_container">
              <img src={photo} alt="Dynamic earth" />
            </div>

            <div className="text_container">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </main>
      </div>
    </Fragment>
  );
};
export default aboutMe;
