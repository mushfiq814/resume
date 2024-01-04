import React, { ReactNode } from "react";
import { View, Text } from "@react-pdf/renderer";

const ListItem = ({ children }: { children: ReactNode }) => (
  <View style={{
    display: "flex",
    flexDirection: "row",
  }}>
    <View style={{
      height: "100%",
    }}>
      <Text>{"• "}</Text>
    </View>
    <Text>{children}</Text>
  </View>
);

export default ListItem;
