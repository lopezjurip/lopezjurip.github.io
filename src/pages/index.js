import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

const Screen = styled.div``;

const Section = styled.section`
  min-height: 30em;
  height: 90vh;
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
`;

const HeroSection = styled(Section)``;
const ContactSection = styled(Section)`
  background-color: grey;
`;

const Title = styled.h1`
  margin: 3em auto;
  padding: 8px 0.5em 0;

  font-size: 4em;
  line-height: 1.2em;
  text-rendering: optimizeLegibility;
  text-transform: uppercase;

  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-blend-mode: color;
  background-repeat: no-repeat;
  background-size: 70% 0.3em;
  background-position: 0 90%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
`;

const IndexPage = () => (
  <Screen>
    <HeroSection>
      <Grid>
        <Row>
          <Col>
            <Title>Patricio López J.</Title>
          </Col>
        </Row>
      </Grid>
    </HeroSection>
    <ContactSection>
      <Grid>
        <Row>
          <Col>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="#">Go to page 2</Link>
          </Col>
        </Row>
      </Grid>
    </ContactSection>
  </Screen>
);

export default IndexPage;
