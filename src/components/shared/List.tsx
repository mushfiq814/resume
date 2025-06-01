import { View, Text } from "@react-pdf/renderer";
import React from "react";

import MarkdownText from "./MarkdownText";

const ListItem = ({ children }: { children: string }) => (
  <View style={{
    display: "flex",
    flexDirection: "row",
  }}>
    <View style={{
      height: "100%",
    }}>
      <Text>{"• "}</Text>
    </View>
    <MarkdownText>{children}</MarkdownText>
  </View>
);

const List = ({ children }: { children: string[] }) => (
  <View>
    {children.map((child, i) => (
      <ListItem key={i}>
        {child}
      </ListItem>
    ))}
  </View>
);

export default List;
