import React from "react";
import "./about_me.scss";
import { photo } from "../../images";
import { Layout } from "../../components";

const aboutMe = () => {
  return (
    <Layout>
      <div id="about" className="page_container">
        <div className="padding_between_pages">
        <div className="section_title--aboutMe">About me</div>
        <div className="exact_container"> 
        <div className="picture_container">
            <img src={photo} alt="Dynamic earth" />
          </div>
          <div className="text_container">
            <p>
              I work as a full-stack software engineer for BBC Archive Services.
              I am both interested in frontend and backend technologies. I
              really like building web-apps with React, games in Unity Engine
              and learning new programming languages and concepts. I am a bit of
              a data geek and I like reading about AI and Data Science.
              <br />
              <br />
              My interests are focused on impact of technology on people's
              everyday life and how technology can improve things.
              <br />
              <br />
              Outside that, I like learning about history of the world, write
              and read books, doing yoga (when I don't feel lazy), travel and
              cook. During lockdown I started an online book club in Edinburgh,
              and I joined few other book clubs as well.
              <br />
              <br />
              To find out more about me please check out my resume, or scroll
              down 😊
              <br />
            </p>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};
export default aboutMe;
