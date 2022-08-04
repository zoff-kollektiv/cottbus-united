import Participate from "components/organisms/Participate";
import About from "components/organisms/About";
import Footer from "components/organisms/Footer";
import Landing from "components/organisms/Landing";
import Mission from "components/organisms/Mission";
import Contact from "components/organisms/Contact";
import Partners from "components/organisms/Partners";
import Resources from "components/organisms/Resources";
import React from "react";

const IndexPage = () => {
  return (
    <div>
      <Landing />
      <About />
      <Mission />
      <Participate />
      <Resources />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
};

export default IndexPage;
