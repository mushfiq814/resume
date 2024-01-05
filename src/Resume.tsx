import {
  Document,
  Page,
} from "@react-pdf/renderer";
import React from "react";

import Education from "./components/sections/Education";
import JobExperience from "./components/sections/JobExperience";
import Objective from "./components/sections/Objective";
import Projects from "./components/sections/Projects";
import Socials from "./components/sections/Socials";
import Title from "./components/sections/Title";
import content from "./content.json";

const Resume = () => (
  <Document>
    <Page size='A4' style={{
      paddingTop: 20,
      paddingHorizontal: 30,
      paddingBottom: 20,
      flexDirection: "column",
      fontFamily: "SF Pro Display",
    }}>
      <Title content={content.name} />
      <Socials content={content.socials} />
      <Objective content={content.objective} />
      <Education content={content.education} />
      <JobExperience content={content.experience} />
      <Projects content={content.projects} />
    </Page>
  </Document>
);

export default Resume;
