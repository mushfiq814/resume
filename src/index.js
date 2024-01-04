import React from 'react';
import {
  Document,
  Font,
  Page,
  renderToFile,
} from '@react-pdf/renderer';
import Header from './components/Header';
import Objective from './components/Objective';
import Education from './components/Education';
import JobExperience from './components/JobExperience';
import Projects from './components/Projects';

// TODO: use typescript

const fontPath = "./fonts/sf-pro-display";
Font.register({
  family: 'SF Pro Display', fonts: [
    { src: `${fontPath}/SF-Pro-Display-Light.otf`, fontStyle: 'normal', fontWeight: 200 },
    { src: `${fontPath}/SF-Pro-Display-LightItalic.otf`, fontStyle: 'italic', fontWeight: 200 },
    { src: `${fontPath}/SF-Pro-Display-Regular.otf`, fontStyle: 'normal', fontWeight: 400 },
    { src: `${fontPath}/SF-Pro-Display-RegularItalic.otf`, fontStyle: 'italic', fontWeight: 400 },
    { src: `${fontPath}/SF-Pro-Display-Black.otf`, fontStyle: 'normal', fontWeight: 900 },
    { src: `${fontPath}/SF-Pro-Display-BlackItalic.otf`, fontStyle: 'italic', fontWeight: 900 },
  ]
});

const Resume = () => (
  <Document>
    <Page size="A4" style={{
      paddingTop: 20,
      paddingHorizontal: 30,
      paddingBottom: 20,
      flexDirection: 'column',
      fontFamily: 'SF Pro Display',
    }}>
      <Header />
      <Objective />
      <Education />
      <JobExperience />
      <Projects />
    </Page>
  </Document>
)

const output = `${__dirname}/resume.pdf`;
renderToFile(<Resume />, output);
console.log(`compiled pdf to ${output}`);
