import React from 'react';
import { Page, Font, Text, View, Document, StyleSheet, renderToFile } from '@react-pdf/renderer';
import {
  GitHubIcon,
  MapMarkerIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkedInIcon,
  GlobeIcon,
} from './icons'

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
    flexDirection: 'column',
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
  },
  linkSection: {
    textTransform: 'uppercase',
    fontSize: 10,
  },
  linkRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  linkItemLogo: {
    marginRight: 5,
  },
  linkItem: {
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

const Resume = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title}>
          <Text>Mushfiq Mahmud</Text>
        </View>
        <View style={styles.linkSection}>
          <View style={styles.linkRow}>
            <LinkItem
              icon={<EnvelopeIcon height={12} width={12} />}
              text="mushfiq8194@gmail.com"
            />
            <LinkItem
              icon={<MapMarkerIcon height={12} width={12} />}
              text="Tampa, FL"
            />
            <LinkItem
              icon={<PhoneIcon height={12} width={12} />}
              text="813-570-1426"
            />
          </View>
          <View style={styles.linkRow}>
            <LinkItem
              icon={<LinkedInIcon height={12} width={12} />}
              text="mushfiq-mahmud"
            />
            <LinkItem
              icon={<GitHubIcon height={12} width={12} />}
              text="mushfiq814"
            />
            <LinkItem
              icon={<GlobeIcon height={7} width={7} />}
              text="mushfiqmahmud.com"
            />
          </View>
        </View>
      </Page>
    </Document>
  )
}

const LinkItem = ({ icon, text, debug = false }) => (
  <View debug={debug} style={styles.linkItem}>
    <View style={styles.linkItemLogo}>
      {icon}
    </View>
    <Text>{text}</Text>
  </View>
)

renderToFile(<Resume />, `${__dirname}/resume.pdf`);
console.log("compiled to ./resume.pdf");
