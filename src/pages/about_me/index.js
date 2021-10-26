import React from "react";
import { Layout } from "../../components";
import "./about_me.scss";
import { text } from "./aboutme.json";

const aboutMe = () => {
  return (
    <Layout>
      <div id="about" className="page_container">
        <div className="exact_container">
          <div className="picture_container"></div>

          <div className="text_container">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default aboutMe;
