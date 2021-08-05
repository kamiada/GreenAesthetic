import React from "react";
import { Layout, Panel, Button } from "../../components";
import "./projects.scss";

const scrollToBottom = () => {
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
          <Panel />
          <Panel />
          <Panel />
          <Panel />
        </div>
        <Button
          class="projects-button-scroll"
          onClick={() => scrollToBottom()}
          title="Scroll down to find out about my projects!"
        />
      </div>
    </Layout>
  );
};
export default Projects;
