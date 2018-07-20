import React from "react";
import styled from "styled-components";

import HeroSection from "../components/sections/Hero";
// import DemoSection from "../components/sections/Demo";
import ConsultingSection from "../components/sections/Consulting";
import ContactSection from "../components/sections/Contact";
import AboutSection from "../components/sections/About";

const Screen = styled.div``;

const IndexPage = props => (
  <Screen {...props}>
    <HeroSection />
    {/* <DemoSection /> */}
    <ConsultingSection />
    <ContactSection />
    <AboutSection />
  </Screen>
);

export default IndexPage;
