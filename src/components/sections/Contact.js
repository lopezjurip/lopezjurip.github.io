import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import Section from "../Section";

const Container = Section.extend`
  background-color: #e8ecee;
`;

const ContactText = styled.h3`
  padding: 2em 1em;
  text-decoration-color: #74ebd5;
  text-transform: lowercase;
`;

const ContactItem = ({ text, ...props }) => (
  <a rel="noopener noreferrer" target="_blank" {...props}>
    <ContactText>{text}</ContactText>
  </a>
);
ContactItem.propTypes = {
  text: PropTypes.any.isRequired,
};
ContactItem.defaultProps = {
  href: "#",
};

export class ContactSection extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  static defaultProps = {
    items: [
      { text: "Currículum Vítae", href: "/CV/lopezjuri.pdf" },
      { text: "Email", href: "mailto:patricio@lopezjuri.com" },
      { text: "Telegram", href: "https://telegram.me/lopezjurip" },
      { text: "Twitter", href: "https://twitter.com/lopezjurip" },
      { text: "Instagram", href: "https://instagram.com/lopezjurip" },
      { text: "Github", href: "https://github.com/lopezjurip" },
      { text: "LinkedIn", href: "https://cl.linkedin.com/in/lopezjuri" },
      {
        text: "Discogs",
        href: "https://www.discogs.com/user/lopezjurip/collection",
      },
    ],
  };

  render() {
    return (
      <Container>
        <Row center="xs" middle="xs">
          {this.props.items.map(item => (
            <Col key={item.href}>
              <ContactItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ContactSection;
