import React, { ReactNode } from "react";
import {
  Line,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

const SubHeader = ({ title, children }: { title: string, children: ReactNode }) => (
  <View style={{
    marginVertical: 5,
  }}>
    <Text style={{
      fontWeight: 900,
      fontSize: 11,
      textTransform: "uppercase",
    }}>
      {title.split("").join(" ")}
    </Text>

    {/* TODO: make width dynamic */}
    <Svg height="10" width="535">
      <Line x1="0" y1="5" x2="535" y2="5" strokeWidth={1} stroke="rgb(0,0,0)" />
    </Svg>

    <View style={{
      fontWeight: 400,
      fontSize: 10,
    }}>
      {children}
    </View>
  </View>
);

export default SubHeader;
