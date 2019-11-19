import React from "react";
import styled from "styled-components";

import Layout from "../layout";
import HeroSection from "../components/sections/Hero";
import DemoSection from "../components/sections/Demo";
import ConsultingSection from "../components/sections/Consulting";
import ContactSection from "../components/sections/Contact";
import AboutSection from "../components/sections/About";

const Screen = styled.div`
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
`;

const IndexPage = props => (
  <Layout>
    <Screen {...props}>
      <HeroSection />
      <DemoSection />
      <ConsultingSection />
      <ContactSection />
      <AboutSection />
    </Screen>
  </Layout>
);

export default IndexPage;
