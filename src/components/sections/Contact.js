import React, { Component } from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import Section from "../Section";

const Container = styled(Section)`
  background-color: #e8ecee;
`;

const ContactItem = styled.h3`
  padding: 2em 1em;
  text-decoration-color: #74ebd5;
  text-transform: lowercase;
`;

export class ContactSection extends Component {
  render() {
    return (
      <Container>
        <Row center="xs" middle="xs">
          <Col>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/CV/lopezjuri.pdf"
            >
              <ContactItem>Currículum Vítae</ContactItem>
            </a>
          </Col>
          <Col>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://telegram.me/mrpatiwi"
            >
              <ContactItem>Telegram</ContactItem>
            </a>
          </Col>
          <Col>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:patricio@lopezjuri.com"
            >
              <ContactItem>Email</ContactItem>
            </a>
          </Col>
          <Col>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/lopezjurip"
            >
              <ContactItem>Twitter</ContactItem>
            </a>
          </Col>
          <Col>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://cl.linkedin.com/in/lopezjuri"
            >
              <ContactItem>LinkedIn</ContactItem>
            </a>
          </Col>
          <Col>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/lopezjurip"
            >
              <ContactItem>Github</ContactItem>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactSection;
