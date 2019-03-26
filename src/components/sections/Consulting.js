import React, { Component } from "react";
import styled from "styled-components";

import Section from "../Section";

const Title = styled.h2`
  color: black;
  padding: 0.8em;
  background: linear-gradient(to left, #ffffff, #ffffff) no-repeat -60px -38px;
  margin: 1.3em auto 1em;

  transform: rotate(-2deg);
  text-shadow: -4px -4px #eee;
  font-variant: small-caps;
  text-transform: lowercase;
`;

const Container = styled(Section).attrs({
  as: "a",
  href: "mailto:patricio@lopezjuri.com",
})`
  background: linear-gradient(to right, #acb6e5, #74ebd5);
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-width: 1em;
  border-bottom-width: 1em;
  border-style: solid;
  border-color: transparent;
  border-image: linear-gradient(to right, #acb6e5 40%, #74ebd5 70%);
  border-image-slice: 1;

  cursor: pointer;

  &:hover {
    ${Title} {
      padding: 0.6em;
      margin: 1.5em auto 1.2em;
      text-shadow: -5px -5px #eee;
    }
  }
`;

export class ConsultingSection extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Container>
        <Title>{"Send me an email and let's have a beer"}</Title>
      </Container>
    );
  }
}

export default ConsultingSection;
