import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Cube from "../components/Cube";

const Screen = styled.div`
  overflow: hidden;
`;

const Section = styled.section`
  min-height: 30em;
  height: 90vh;
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
`;

const HeroSection = styled(Section)`
  background-color: #e8ecee;
  overflow: hidden;
`;

const ContactSection = styled(Section)`
  position: absolute;
  background-color: #6d797a;
  z-index: 10000;
`;

const HeroContent = styled.div`
  position: absolute;
  margin: 10% auto 0;
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
    background-size: 100% 88%;
  }
`;

const Lead = styled.p`
  padding: 1em 2em 0;
`;

const IndexPage = () => (
  <Screen>
    <HeroSection>
      <Grid>
        <Row>
          <Col>
            <Cube
              ry={1.5}
              rx={1.5}
              size={60}
              style={{
                left: 40,
                top: 40,
              }}
            />

            <Cube
              ry={0.1}
              rx={0.3}
              size={500}
              style={{
                left: "50%",
                top: "50%",
              }}
            />

            <Cube
              ry={0.4}
              rx={0.1}
              size={190}
              style={{
                right: "66%",
                bottom: "10%",
              }}
            />
            <HeroContent>
              <Title>Patricio López J.</Title>
              <Row>
                <Col sm={6}>
                  <Lead>
                    Software Engineer, IT Consultant and Full-stack developer
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
            <Cube
              ry={1}
              rx={2}
              size={40}
              style={{
                left: "50%",
                top: "50%",
              }}
            />
            <Cube
              ry={0.1}
              rx={0.1}
              size={90}
              style={{
                left: "60%",
                top: "70%",
              }}
            />
            <Cube
              ry={0.2}
              rx={0.5}
              size={150}
              style={{
                right: 160,
                top: 50,
              }}
            />
            <Cube
              size={80}
              ry={2}
              rx={1}
              style={{
                right: 100,
                bottom: 120,
              }}
            />
          </Col>
        </Row>
      </Grid>
    </HeroSection>
    <ContactSection>
      <Grid>
        <Row>
          <Col />
        </Row>
      </Grid>
    </ContactSection>
  </Screen>
);

export default IndexPage;
