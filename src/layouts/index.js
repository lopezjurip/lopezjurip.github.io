import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import GithubCorner from "react-github-corner";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Patricio López J."
      meta={[
        {
          name: "description",
          content: "Software Engineer, IT Consultant and Full-stack developer.",
        },
        {
          name: "subject",
          content: "Software Engineer, IT Consultant and Full-stack developer.",
        },
        {
          name: "keywords",
          content: [
            "software consultant",
            "software developer",
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
          content: "https://lopezjuri.com/favicons/android-chrome-256x256.png",
        },
        {
          property: "og:description",
          content:
            "Software Engineer, IT Consultant and Full-stack developer passionate in producing real solutions using the best tools available. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
        },
        { property: "og:site_name", content: "lopezjuri.com" },
        { property: "og:locale", content: "en_US" },
        {
          name: "twitter:card",
          content:
            "Software Engineer, IT Consultant and Full-stack developer passionate in producing real solutions using the best tools available. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
        },
        { name: "twitter:site", content: "@mrpatiwi" },
        { name: "twitter:creator", content: "@mrpatiwi" },
        { name: "twitter:url", content: "https://lopezjuri.com" },
        { name: "twitter:title", content: "Patricio López J." },
        {
          name: "twitter:description",
          content:
            "Software Engineer, IT Consultant and Full-stack developer passionate in producing real solutions using the best tools available. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
        },
        {
          name: "twitter:image",
          content: "https://lopezjuri.com/favicons/android-chrome-256x256.png",
        },
      ]}
    />
    <div>{children()}</div>
    <GithubCorner
      href="https://github.com/lopezjurip/lopezjurip.github.io/tree/source"
      octoColor="#e8ecee"
      bannerColor="#6d797a"
    />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
