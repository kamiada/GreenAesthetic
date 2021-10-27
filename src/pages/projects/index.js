import React from "react";
import { Panel, Layout } from "../../components";
import { NHM } from "../../images";
import "./projects.scss";
import projects from "./projects.json";

const displayText = (text) => {
  const n = document.getElementById("displayText");
  return (n.textContent = text);
};

const Projects = () => {
  return (
    <Layout>
      <div className="projects-container" id="projects">
        <div className="table">
          <Panel
            onClick={() => displayText(projects.projectsDescriptions[0].post)}
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            onClick={() => displayText(projects.projectsDescriptions[1].post)}
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            onClick={() => displayText(projects.projectsDescriptions[2].post)}
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            onClick={() => displayText(projects.projectsDescriptions[3].post)}
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            onClick={() => displayText(projects.projectsDescriptions[4].post)}
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            onClick={() => displayText(projects.projectsDescriptions[5].post)}
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
          <Panel
            onClick={() => displayText(projects.projectsDescriptions[6].post)}
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
          />
        </div>

        <div className="text_container">
          <p id="displayText"></p>
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
