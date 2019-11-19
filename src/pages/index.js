import React from "react";

import Layout from "../layout";
import HeroSection from "../components/sections/Hero";
import DemoSection from "../components/sections/Demo";
import ConsultingSection from "../components/sections/Consulting";
import ContactSection from "../components/sections/Contact";
import AboutSection from "../components/sections/About";

export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <HeroSection />
      <DemoSection />
      <ConsultingSection />
      <ContactSection />
      <AboutSection />
    </Layout>
  );
}
