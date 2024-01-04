import React from 'react';
import { Link, Text, View } from '@react-pdf/renderer';
import {
  GitHubIcon,
  MapMarkerIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkedInIcon,
  GlobeIcon,
} from '../icons'

const ICON_DIMENSIONS = 10;

export const LinkSection = ({ children }) => (
  <View style={{
    marginTop: 2,
    gap: 3,
  }}>
    {children}
  </View>
);

export const LinkRow = ({ children }) => (
  <View style={{
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 14,
  }}>
    {children}
  </View>
);

const LinkItem = ({ icon, content, href = "#", debug = false }) => (
  <View debug={debug} style={{
    fontSize: 11,
    textAlign: 'center',
    textTransform: 'uppercase',
    flexDirection: 'row',
    alignItems: 'center',
  }}>
    <View style={{ marginRight: 7 }}>{icon}</View>
    <Link src={href} style={{
      color: "black",
      textDecoration: "none",
    }}>
      <Text>{content}</Text>
    </Link>
  </View>
)

export const MailLink = ({ email }) =>
  <LinkItem
    icon={<EnvelopeIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={email}
    href={`mailto:${email}`}
  />

export const LocationLink = ({ location }) =>
  <LinkItem
    icon={<MapMarkerIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={location}
  />

export const PhoneLink = ({ phone }) =>
  <LinkItem
    icon={<PhoneIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={phone}
    href={`tel:+1${phone.replaceAll("-", "")}`}
  />

export const LinkedInLink = ({ username }) =>
  <LinkItem
    icon={<LinkedInIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={username}
    href={`https://linkedin.com/in/${username}`}
  />

export const GitHubLink = ({ username }) =>
  <LinkItem
    icon={<GitHubIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={username}
    href={`https://github.com/${username}`}
  />

export const WebsiteLink = ({ href }) => (
  <LinkItem
    icon={<GlobeIcon height={ICON_DIMENSIONS} width={ICON_DIMENSIONS} />}
    content={href}
    href={`https://${href}`}
  />
);
