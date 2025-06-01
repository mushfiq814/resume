import React from "react";

import Header from "../shared/Header";
import List from "../shared/List";

type ProjectContent = string[];

const Projects = ({ content }: { content: ProjectContent }) => (
  <Header title="Projects">
    <List>
      {content}
    </List>
  </Header >
);

export default Projects;
