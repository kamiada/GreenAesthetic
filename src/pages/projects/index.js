import React from "react";
import { Panel, Layout } from "../../components";
import { NHM, MobileApp, Arctica, Live } from "../../images";
import "./projects.scss";
import projects from "./projects.json";

const displayDetails = () => {
  console.log("works");
};

const Projects = () => {
  return (
    <Layout>
      <div className="section_title_projects">My Projects</div>
      <div className="projects-container" id="projects">
        <div className="table">
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            onClick={() => displayDetails}
            projectTitle={projects.projectsDescriptions[0].title}
            link={projects.projectsDescriptions[0].github}
            tags={projects.projectsDescriptions[0].tags}
          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[1].title}
            link={projects.projectsDescriptions[1].github}
            tags={projects.projectsDescriptions[1].tags}
          />
          <Panel
            image={Live}
            alt="Screenshot of the web app from BBC hackathon"
            projectTitle={projects.projectsDescriptions[2].title}
            link={projects.projectsDescriptions[2].github}
            tags={projects.projectsDescriptions[2].tags}
          />
          <Panel
            image={MobileApp}
            alt="Poster of project for the dissertation"
            projectTitle={projects.projectsDescriptions[3].title}
            // link={projects.projectsDescriptions[3].outsideLinks}
            description={projects.projectsDescriptions[3].post}
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
            link={projects.projectsDescriptions[5].github}
            tags={projects.projectsDescriptions[5].tags}
          />
          <Panel
            image={Arctica}
            alt="Screenshot of web browser game Arctica with polar bear on it"
            projectTitle={projects.projectsDescriptions[6].title}
            link={projects.projectsDescriptions[6].links}
            tags={projects.projectsDescriptions[6].tags}
          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[7].title}
            link={projects.projectsDescriptions[7].github}
            tags={projects.projectsDescriptions[7].tags}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
