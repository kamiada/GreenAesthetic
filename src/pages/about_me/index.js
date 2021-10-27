import React from "react";
import "./about_me.scss";
import { text } from "./aboutme.json";
import { photo } from "../../images";
import { Layout } from "../../components";

const aboutMe = () => {
  return (
     <Layout>
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
     </Layout>
  );
};
export default aboutMe;
