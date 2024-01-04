import React from 'react';
import { Link, StyleSheet } from '@react-pdf/renderer';
import SubHeader from './SubHeader';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  link: {
    textDecoration: "none",
    fontWeight: 600,
    color: "black",
  }
})

const Projects = () => (
  <SubHeader title="Projects">
    <ListItem>Create a compiler from scratch for a Java-like Object Oriented language into Assembly using C without libraries.</ListItem>
    <ListItem>Implement PostgreSQL custom aggregates and functions by modifying source code as well as using PL/SQL.</ListItem>
    <ListItem>Create single page application in Angular8 using YouTube API to browse and watch videos (<Link style={styles.link} src="https://github.com/mushfiq814/youtube-data-api-dogVids">link</Link>).</ListItem>
    <ListItem>More projects on my <Link style={styles.link} src="https://mushfiqmahmud.com/html/projects">website</Link> and <Link style={styles.link} src="https://github.com/mushfiq814">github</Link>.</ListItem>
  </SubHeader>
)

export default Projects;
