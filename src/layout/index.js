import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import GithubCorner from "react-github-corner";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e8ecee;
  }
`;

const Screen = styled.div`
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
`;

export default function Layout({ children, ...props }) {
  return (
    <Screen {...props}>
      <GlobalStyle />
      <Helmet
        title="Patricio López J."
        meta={[
          {
            name: "viewport",
            // content: "viewport-fit=cover",
            content:
              "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
          },
          {
            name: "description",
            content:
              "Software Engineer, IT Consultant and Full-Stack developer.",
          },
          {
            name: "subject",
            content:
              "Software Engineer, IT Consultant and Full-Stack developer.",
          },
          {
            name: "keywords",
            content: [
              "software consultant",
              "software developer",
              "blockchain engineer",
              "web3",
              "chile",
              "santiago",
              "react",
              "react-native",
              "node",
            ].join(", "),
          },
          {
            name: "geo.region",
            content: "CL",
          },
          {
            name: "geo.placename",
            content: "Santiago",
          },
          { property: "og:url", content: "https://lopezjuri.com" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Patricio López J." },
          {
            property: "og:image",
            content:
              "https://lopezjuri.com/favicons/android-chrome-256x256.png",
          },
          {
            property: "og:description",
            content:
              "Software Engineer, IT Consultant and Full-Stack developer passionate in producing real solutions using the best available tools in the market. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
          },
          { property: "og:site_name", content: "lopezjuri.com" },
          { property: "og:locale", content: "en_US" },
          {
            name: "twitter:card",
            content:
              "Software Engineer, IT Consultant and Full-Stack developer passionate in producing real solutions using the best available tools in the market. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
          },
          { name: "twitter:site", content: "@lopezjurip" },
          { name: "twitter:creator", content: "@lopezjurip" },
          { name: "twitter:url", content: "https://lopezjuri.com" },
          { name: "twitter:title", content: "Patricio López J." },
          {
            name: "twitter:description",
            content:
              "Software Engineer, IT Consultant and Full-Stack developer passionate in producing real solutions using the best available tools in the market. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
          },
          {
            name: "twitter:image",
            content:
              "https://lopezjuri.com/favicons/android-chrome-256x256.png",
          },
        ]}
      />
      {children}
      <GithubCorner
        href="https://github.com/lopezjurip/lopezjurip.github.io/tree/source"
        octoColor="#e8ecee"
        bannerColor="#6d797a"
      />
    </Screen>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
