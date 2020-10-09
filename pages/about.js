import React from "react";

import { SEOLayout } from "../components/SEOLayout";
import { AboutIntro } from "../components/AboutIntro";
import { AboutClosing } from "../components/AboutClosing";

// import { Item } from "../components/Item";

const About = (props) => (
  <SEOLayout
  // title={Item.title}
  >
    <main>
      <section
        className="about flex-vertical"
      >
        <div className="container">
          <AboutIntro />
          <AboutClosing />
        </div>
      </section>
    </main>
  </SEOLayout>
);

export default About;
