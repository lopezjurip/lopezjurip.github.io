import React, { Component } from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import Section from "../Section";

const Container = Section.extend`
  background-color: #202020;
`;

const Text = styled.p`
  margin: 0.5em 1em;
  color: #8fd3f4;
  font-weight: lighter;
  font-size: 0.8em;
`;

const A = styled.a.attrs({
  rel: "noopener noreferrer",
})`
  text-decoration: none;
  color: inherit;
  font-weight: 300;
`;

export class AboutSection extends Component {
  render() {
    return (
      <Container>
        <Row center="xs" middle="xs">
          <Col>
            <Text>
              <em>Made by me.</em> Thanks to{" "}
              <A href="https://reactjs.org/">React.js</A> and{" "}
              <A href="https://www.styled-components.com/">styled-components</A>{" "}
              and <A href="https://www.gatsbyjs.org/">Gatsby.js</A>
            </Text>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutSection;
