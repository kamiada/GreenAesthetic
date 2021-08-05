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
    </Layout>
  );
};
export default Projects;
