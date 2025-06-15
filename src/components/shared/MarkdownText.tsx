import { Text, Link, View } from "@react-pdf/renderer";
import { Token, marked } from "marked";
import React from "react";

type MarkdownTextProps = {
  children: string;
  style?: object;
};

const MarkdownText = ({ children, style }: MarkdownTextProps) => {
  const tokens = marked.lexer(children);

  const renderTokens = (tokens: ReturnType<typeof marked["lexer"]> | Token[]) =>
    tokens.map((token, index) => {
      switch (token.type) {
      case "paragraph":
        return (
          <Text key={index} style={{ ...style }}>
            {token.tokens && renderTokens(token.tokens)}
          </Text>
        );

      case "text":
        return (
          <Text key={index} style={{}}>
            {token.text}
          </Text>
        );

      case "strong":
        return (
          <Text key={index} style={{ fontWeight: "bold", ...style }}>
            {token.text}
          </Text>
        );

      case "em":
        return (
          <Text key={index} style={{ fontStyle: "italic", ...style }}>
            {token.text}
          </Text>
        );

      case "link":
        return (
          <Link key={index} src={token.href} style={{
            textDecoration: "none",
            fontWeight: 600,
            color: "black",
            ...style
          }}>
            {token.text}
          </Link>
        );

      case "codespan":
        return (
          <View key={index} style={{
            backgroundColor: "#ff0000", // Light gray background
            paddingHorizontal: 4,
            paddingVertical: 2,
            borderRadius: 40,
            display: "flex",
          }}>
            <Text style={{
              display: "flex",
              fontSize: 9,
              fontFamily: "hasklug",
              fontStyle: "normal",
              fontWeight: "semibold",
              ...style
            }}>
              {token.text}
            </Text>
          </View>
        );

      case "blockquote":
      case "br":
      case "code":
      case "def":
      case "del":
      case "escape":
      case "heading":
      case "hr":
      case "html":
      case "image":
      case "list":
      case "list_item":
      case "space":
      case "table":
      case "string":
      default:
        console.log(
          `[MarkdownText]: Unhandled token type: ${token.type}`,
          token
        );
        return null;
      }
    });

  return <>{renderTokens(tokens)}</>;
};

export default MarkdownText;
