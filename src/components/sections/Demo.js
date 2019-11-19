import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Typed from "react-typed";

import Section from "../Section";
import LaptopVideo from "../LaptopVideo";

const Container = styled(Section)`
  background-color: #6d797a;
`;

const StyledLaptopVideo = styled(LaptopVideo)`
  margin: 2em 0 2em -9em;
`;

const ColContent = styled.div`
  margin: 2.5em 0;
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: white;
`;

const StyledTyped = styled(Typed)`
  color: white;
  font-family: Helvetica Neue, sans-serif;
  line-height: 1em;
  font-size: 3em;
`;

export class DemoSection extends Component {
  static propTypes = {
    strings: PropTypes.array.isRequired,
  };

  static defaultProps = {
    strings: ["Mobile apps", "Web Pages", "Blockchain", "dApps", "APIs"],
  };

  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Col xs={false} sm={5} md={5} lg={4}>
              <StyledLaptopVideo />
            </Col>
            <Col xs={12} sm={7} md={7} lg={8}>
              <ColContent>
                <Title>{"Let's build something together"}</Title>
                <StyledTyped
                  strings={this.props.strings}
                  typeSpeed={30}
                  backSpeed={40}
                  loop
                />
              </ColContent>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default DemoSection;
