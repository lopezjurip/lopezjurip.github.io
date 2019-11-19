import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Section from "../Section";

const Container = styled(Section)`
  height: 60vh;
  min-height: 30em;
  background-color: #e8ecee;
`;

const HeroContent = styled.div`
  margin: 8% auto 0;
`;

const Title = styled.h1`
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
    background-size: 95% 88%;
  }
`;

const SubTitle = styled.div`
  padding: 0em 2em 1em;
  text-rendering: optimizeLegibility;
`;

const EmailLink = styled.a`
  color: #6d797a;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Lead = styled.p`
  padding: 0.4em 2em 0;
  text-rendering: optimizeLegibility;
`;

export default function HeroSection(props) {
  return (
    <Container {...props}>
      <Grid>
        <Row>
          <Col xs={12}>
            <HeroContent>
              <Title>Patricio López J.</Title>
              <Row>
                <Col xs={12} sm={8} md={6}>
                  <SubTitle>
                    <EmailLink href="mailto:patricio@lopezjuri.com">
                      patricio@lopezjuri.com
                    </EmailLink>
                  </SubTitle>
                  <Lead>
                    Software Engineer, IT Consultant and Full-Stack developer
                    passionate in producing real solutions using the best
                    available tools.
                  </Lead>
                  <Lead>
                    Interested in state of the art technology. Focused in high
                    quality code and top-tier development/deployment procedures.
                  </Lead>
                </Col>
              </Row>
            </HeroContent>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}
