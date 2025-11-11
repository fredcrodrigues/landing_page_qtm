import React from "react";
import { Element } from "react-scroll";
import FeaturesBig from "components/FeatureImages";
import FeaturesGrid from "components/FeatureGrid";
import Gallery from "components/Gallery";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";
import Clients from "components/Clients"
import Footer from "components/Footer";
import NumbersSection from "components/NumberSection";

function Home() {
  return (
    <>
     <Element name="inicio">
        <Hero />
     </Element>
      {/*<LogoCloud />*/}
     <Element name="servicos">
      <FeaturesGrid />
     </Element>
     <Element name="resultados">
        <FeaturesBig />
     </Element>
    <Element  name="praticas">
        <Gallery />
    </Element>
    <Element>
      <NumbersSection/>
    </Element>
    
    <Element  name="">
        <Clients/>
    </Element>
      
    <Element name="contato">
       <Footer />
    </Element>
    </>
  );
}

export default Home;
