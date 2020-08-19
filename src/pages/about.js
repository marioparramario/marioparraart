import React from "react";
import "../styles/about.scss";
import { AboutIntro } from "../components/AboutIntro"
import { AboutClosing } from "../components/AboutClosing"


const About = props => (

  <section className="about flex-vertical">

    <div className="container">
      <AboutIntro />
      <AboutClosing />
      

    </div>
  </section>
);

export { About };

