import React from "react";
import Navbar from "../../component/Navbar";
import Hero from "../../component/hero";
import Feature from "../../component/Feature";
import Testimonials from "../../component/Testimonials";
import Footer from "../../component/Footer";
import Accordion from "../../component/SimpleAccordion";

function LandingPg() {
  return <div>
    <Navbar />
    <Hero />
    <Feature />
    <Testimonials />
    <Accordion />
    <Footer />
  </div>;
}

export default LandingPg;
