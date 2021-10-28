import React from "react";
import "./contact.scss";
import { Layout } from "../../components";
import {Github, Linkedin} from '../../images';

const contact = () => {
  return (
    <Layout>
      <div id="contact" className="contact_container">
          <div className="link_container">
            <img src={Github} alt="github icon"/>
          </div>
          <div className="link_container">
            <img src={Linkedin} alt="linkedin icon"/>
          </div>
          <footer className="container">
          <span>&#169;</span> Adrianna Kaminska
        </footer>
      </div>
    </Layout>
  );
};
export default contact;
