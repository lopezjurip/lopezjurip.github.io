import React, { Component } from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

import Section from "../Section";

const Container = styled(Section)`
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
  color: white;
  font-weight: 300;
`;

export class AboutSection extends Component {
  render() {
    return (
      <Container>
        <Row center="xs" middle="xs">
          <Col>
            <Text>
              <strong>
                This page was made by <em>hand</em> by me.
              </strong>{" "}
              Thanks to <A href="https://reactjs.org/">React.js</A> and{" "}
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
