import React from "react";
import { Panel, Layout } from "../../components";
import { NHM } from "../../images";
import "./projects.scss";
import projects from "./projects.json";

const Projects = () => {
  return (
    <Layout>
      <div className="projects-container" id="projects">
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
      </div>
    </Layout>
  );
};
export default Projects;
