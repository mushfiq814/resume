import React from "react";

import Header from "../shared/Header";
import MarkdownText from "../shared/MarkdownText";

const Objective = ({ content }: { content: string }) => (
  <Header title="Objective">
    <MarkdownText>{content}</MarkdownText>
  </Header>
);

export default Objective;
