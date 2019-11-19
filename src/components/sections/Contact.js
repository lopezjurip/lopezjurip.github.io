import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import Section from "../Section";

const Container = styled(Section)`
  background-color: #e8ecee;
`;

const Contact = styled.a.attrs({
  rel: "noopener noreferrer",
  target: "_blank",
})``;

Contact.Text = styled.h3`
  padding: 2em 1em;
  text-decoration-color: #74ebd5;
  text-transform: lowercase;
`;

export default function ContactSection({ items, ...props }) {
  return (
    <Container {...props}>
      <Row center="xs" middle="xs">
        {items.map(item => (
          <Col key={item.href}>
            <Contact href={item.href}>
              <Contact.Text>{item.text}</Contact.Text>
            </Contact>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

ContactSection.propTypes = {
  items: PropTypes.array.isRequired,
};

ContactSection.defaultProps = {
  items: [
    { text: "Currículum Vítae", href: "/CV/lopezjuri.pdf" },
    { text: "Email", href: "mailto:patricio@lopezjuri.com" },
    { text: "Telegram", href: "https://telegram.me/lopezjurip" },
    { text: "Twitter", href: "https://twitter.com/lopezjurip" },
    { text: "Instagram", href: "https://instagram.com/lopezjurip" },
    { text: "Github", href: "https://github.com/lopezjurip" },
    { text: "LinkedIn", href: "https://linkedin.com/in/lopezjuri" },
    { text: "Medium", href: "https://medium.com/@patriciolpezjuri" },
    {
      text: "Discogs",
      href: "https://www.discogs.com/user/lopezjurip/collection",
    },
  ],
};
