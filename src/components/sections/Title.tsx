import {
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

const Title = ({ content }: { content: string }) => (
  <View style={{
    fontSize: 17,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 900,
  }}>
    <Text>{content}</Text>
  </View>
);

export default Title;
