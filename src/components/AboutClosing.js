import * as React from "react";

export const AboutClosing = () => (
  <div className="about-closing flex justify-center align-center">
    <div className="column hire">
      <h3>You can hire me for:</h3>
      <ul className="wrapper">
        <li>Illustration</li>
        <li>Graphic design</li>
        <li>Art direction</li>
        <li>Character design</li>
        <li>Motion design</li>
        <li>Animation</li>
      </ul>
    </div>

    <div className="column contact">
      <h3>Let’s get it touch.</h3>
      <div className="wrapper flex">
        <div className="item flex vertical justify-start">
          <span>Email</span>
          <a href="mailto:hello@marioparra.art">hello@marioparra.art</a>
        </div>
        <div className="item flex vertical justify-start">
          <span>Phone</span>
          <a href="tel:+491789154238">+49 178 9154238</a>
        </div>
      </div>
    </div>
  </div>
);
