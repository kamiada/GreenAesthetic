import React from "react";
import { Panel, Layout } from "../../components";
import { NHM } from "../../images";
import "./projects.scss";
import projects from "./projects.json";

const Projects = () => {
  return (
    <Layout>
      <div className="section_title_projects">
        Projects which I was working on
      </div>
      <div className="projects-container" id="projects">
        <div className="table">
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[0].title}
            tags={projects.projectsDescriptions[0].tags}
          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[1].title}
            tags={projects.projectsDescriptions[1].tags}

          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[2].title}
            tags={projects.projectsDescriptions[2].tags}

          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[3].title}
            tags={projects.projectsDescriptions[3].tags}

          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[4].title}
            tags={projects.projectsDescriptions[4].tags}

          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[5].title}
            tags={projects.projectsDescriptions[5].tags}

          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[6].title}
            tags={projects.projectsDescriptions[6].tags}

          />
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
