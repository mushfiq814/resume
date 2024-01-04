import {
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

import {
  GitHubLink,
  LinkRow,
  LinkSection,
  LinkedInLink,
  LocationLink,
  MailLink,
  PhoneLink,
  WebsiteLink,
} from "./LinkSection";

const Header = () => (
  <>
    <Title title="Mushfiq Mahmud" />
    <LinkSection>
      <LinkRow>
        <MailLink email="mushfiq8194@gmail.com" />
        <LocationLink location="Tampa, FL" />
        <PhoneLink phone="813-570-1426" />
      </LinkRow>
      <LinkRow>
        <LinkedInLink username="mushfiq-mahmud" />
        <GitHubLink username="mushfiq814" />
        <WebsiteLink href="mushfiqmahmud.com" />
      </LinkRow>
    </LinkSection>
  </>
);

const Title = ({ title }: { title: string }) => (
  <View style={{
    fontSize: 17,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 900,
  }}>
    <Text>{title}</Text>
  </View>
);

export default Header;
