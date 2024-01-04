import { View, Text } from "@react-pdf/renderer";
import React, { ReactNode } from "react";

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
