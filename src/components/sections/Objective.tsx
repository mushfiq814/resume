import { Text } from "@react-pdf/renderer";
import React from "react";

import Header from "../shared/Header";

const Objective = ({ content }: { content: string }) => (
  <Header title="Objective">
    <Text>{content}</Text>
  </Header>
);

export default Objective;
