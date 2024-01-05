import React from "react";

import Header from "../shared/Header";
import HyperTextListItem, { HyperText } from "../shared/HyperTextListItem";

type ProjectContent = (string | HyperText)[];

const Projects = ({ content }: { content: ProjectContent }) => (
  <Header title="Projects">
    {content.map((point, i) => (
      <HyperTextListItem key={i} item={point} />
    ))}
  </Header >
);

export default Projects;
