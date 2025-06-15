import { View, Text } from "@react-pdf/renderer";
import React, { Fragment } from "react";

import Header from "../shared/Header";
import InfoLine from "../shared/InfoLine";
import List from "../shared/List";

type EducationContent = {
  school: string
  location: string
  graduation: string
  degree: string
  gpa: string
  bullets: string[]
}

const Education = ({ content: education }: { content: EducationContent[] }) => (
  <Header title="Education">
    {education.map((education, k) => (
      <Fragment key={k}>
        <InfoLine
          title={education.school}
          location={education.location}
          start={education.graduation}
        />
        <View style={{
          marginTop: 3,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Text>{education.degree}</Text>
          <Text>{education.gpa}</Text>
        </View>
        <View style={{
          lineHeight: 1.3,
          marginVertical: 3,
        }}>
          <List>
            {education.bullets}
          </List>
        </View>
      </Fragment>
    ))}
  </Header>
);

export default Education;
