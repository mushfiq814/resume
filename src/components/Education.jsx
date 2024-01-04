import React from 'react';
import SubHeader from './SubHeader';
import JobInfoLocationDate from './JobInfoLocationDate';
import ListItem from './ListItem';
import { View, Text } from '@react-pdf/renderer';

const Education = () => (
  <SubHeader title="Education">
    <JobInfoLocationDate
      title="University of South Florida (USF)"
      location="Tampa, FL"
      start="May 2022"
    />
    <View style={{
      marginTop: 3,
      flexDirection: "row",
      justifyContent: "space-between",
    }}>
      <Text>Master of Science in Computer Science</Text>
      <Text>GPA: 3.6</Text>
    </View>
    <View style={{
      lineHeight: 1.3,
      marginVertical: 3,
    }}>
      <ListItem>Major Coursework: Adv. Databases, Image Processing, Compilers, Operating Systems, Algorithms, Computer Architecture.</ListItem>
      <ListItem>Achievements: Honors College, Honors Scholarship, Phi Kappa Phi Honors Society Member, Undergraduate Research.</ListItem>
    </View>
  </SubHeader>
)

export default Education;
