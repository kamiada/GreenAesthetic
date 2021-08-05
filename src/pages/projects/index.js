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
      <Button
        class="profile-button-scroll"
        onClick={() => scrollToBottom()}
        title="Scroll down to find out about my projects!"
      />
      <Panel />
    </Layout>
  );
};
export default Projects;
