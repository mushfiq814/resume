import React from 'react';
import { Page, Font, Text, View, Document, StyleSheet, renderToFile } from '@react-pdf/renderer';
import { GitHubIcon } from './svg/GitHubIcon'

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

const styles = StyleSheet.create({
  page: {
    padding: 35,
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    fontFamily: 'SF Pro Display',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontWeight: 900,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 900,
  }
});

const Resume = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title}>
          <Text>Mushfiq Mahmud</Text>
          <GitHubIcon />
        </View>
      </Page>
    </Document>
  )
}

renderToFile(<Resume />, `${__dirname}/resume.pdf`);
console.log("compiled to ./resume.pdf");
