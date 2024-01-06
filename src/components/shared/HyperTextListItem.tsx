import { View, Text, Link, StyleSheet } from "@react-pdf/renderer";
import React, { ReactNode } from "react";

export type HyperText = {
  delimeter: string
  links: {
    href: string,
    text: string,
  }[]
  template: string
}

const styles = StyleSheet.create({
  link: {
    textDecoration: "none",
    fontWeight: 600,
    color: "black",
  }
});

const SimpleListItem = ({ children }: { children: ReactNode }) => (
  <View style={{
    display: "flex",
    flexDirection: "row",
  }}>
    <View style={{
      height: "100%",
    }}>
      <Text>{"• "}</Text>
    </View>
    <Text>{children}</Text>
  </View>
);

const HyperTextListItem = ({ item }: { item: string | HyperText }) => {
  if (typeof item === "string") {
    return (
      <SimpleListItem>{item}</SimpleListItem>
    );
  }
  if (typeof item === "object") {
    const txtNodes = item.template.split(item.delimeter);
    const linkNodes = item.links.map((link, j) => (
      <Link
        key={j}
        style={styles.link}
        src={link.href}
      >{link.text}</Link>
    ));
    return (
      <SimpleListItem>
        {interweave(txtNodes, linkNodes)}
      </SimpleListItem>
    );
  }
  return null;
};

const interweave = (arr1: string[], arr2: React.JSX.Element[]) => {
  const out = [];
  for (let i = 0; i < arr1.length; i++) {
    out.push(arr1[i]);
    out.push(arr2[i]);
  }
  return out.filter(item => item != undefined);
};

export default HyperTextListItem;
