import { View } from "@react-pdf/renderer";
import React, { Fragment } from "react";

import Header from "../shared/Header";
import HyperTextListItem, { HyperText } from "../shared/HyperTextListItem";
import InfoLine from "../shared/InfoLine";

type JobExperienceContent = {
  position: string
  company: string
  location: string
  start: string
  end: string
  bullets: (string | HyperText)[]
}

const JobExperience = ({ content }: { content: JobExperienceContent[] }) => (
  <Header title="Job Experience">
    {content.map((experience, k) => (
      <Fragment key={k}>
        <InfoLine
          title={experience.position}
          subtitle={`@ ${experience.company}`}
          location={experience.location}
          start={experience.start}
          end={experience.end}
        />
        <View style={{
          lineHeight: 1.3,
          marginVertical: 5,
        }}>
          {experience.bullets.map((bullet, i) => (
            <HyperTextListItem key={i} item={bullet} />
          ))}
        </View>
      </Fragment>
    ))}
  </Header>
);

export default JobExperience;
