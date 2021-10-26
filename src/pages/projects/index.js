import React from "react";
import { Layout, Panel, Button } from "../../components";
import { NHM } from "../../images";
import "./projects.scss";

const scrollToTop = () => {
  window.scroll({
    top: -1000,
    behavior: "smooth",
  });
};

const Projects = () => {
  return (
    <Layout>
      <div className="projects-container">
        Projects
        <div className="table">
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
        </div>
        <Button
          class="projects-button-scroll"
          onClick={() => scrollToTop()}
          title="Scroll up"
        />
      </div>
    </Layout>
  );
};
export default Projects;
