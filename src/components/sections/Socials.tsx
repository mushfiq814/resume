import { Link, Text, View } from "@react-pdf/renderer";
import React, { ReactNode } from "react";

import {
  GitHubIcon,
  MapMarkerIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkedInIcon,
  GlobeIcon,
} from "../../icons";

const ICON_DIMENSIONS = 10;

type SocialsContent = {
  email: string
  location: string
  phone: string
  linkedIn: string
  github: string
  website: string
}

const Socials = ({
  content,
  debug = false,
}: {
  content: SocialsContent,
  debug?: boolean,
}) => (
  <View
    style={{
      marginTop: 2,
      gap: 3,
    }}
    debug={debug}
  >
    <Row>
      <MailLink email={content.email} />
      <LocationLink location={content.location} />
      <PhoneLink phone={content.phone} />
    </Row>
    <Row>
      <LinkedInLink username={content.linkedIn} />
      <GitHubLink username={content.github} />
      <WebsiteLink href={content.website} />
    </Row>
  </View>
);

const Row = ({
  children,
  debug = false,
}: {
  children: ReactNode,
  debug?: boolean,
}) => (
  <View
    style={{
      justifyContent: "center",
      flexDirection: "row",
      width: "100%",
      gap: 14,
    }}
    debug={debug}
  >
    {children}
  </View>
);

type LinkItemProps = {
  icon: ReactNode,
  content: string,
  href?: string,
  debug?: boolean
}
const LinkItem = ({ icon,
  content,
  href = "#",
  debug = false
}: LinkItemProps) => (
  <View
    style={{
      fontSize: 11,
      textAlign: "center",
      textTransform: "uppercase",
      flexDirection: "row",
      alignItems: "center",
    }}
    debug={debug}
  >
    <View
      style={{ marginRight: 7 }}
      debug={debug}
    >
      {icon}
    </View>
    <Link src={href} style={{
      color: "black",
      textDecoration: "none",
    }}>
      <Text>{content}</Text>
    </Link>
  </View>
);

export const MailLink = ({ email }: { email: string }) =>
  <LinkItem
    icon={<EnvelopeIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={email}
    href={`mailto:${email}`}
  />;

export const LocationLink = ({ location }: { location: string }) =>
  <LinkItem
    icon={<MapMarkerIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={location}
  />;

export const PhoneLink = ({ phone }: { phone: string }) =>
  <LinkItem
    icon={<PhoneIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={phone}
    href={`tel:+1${phone.replaceAll("-", "")}`}
  />;

export const LinkedInLink = ({ username }: { username: string }) =>
  <LinkItem
    icon={<LinkedInIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={username}
    href={`https://linkedin.com/in/${username}`}
  />;

export const GitHubLink = ({ username }: { username: string }) =>
  <LinkItem
    icon={<GitHubIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={username}
    href={`https://github.com/${username}`}
  />;

export const WebsiteLink = ({ href }: { href: string }) => (
  <LinkItem
    icon={<GlobeIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={href}
    href={`https://${href}`}
  />
);

export default Socials;
