import * as React from "react";

export const Welcome = () => (
  <section className="welcome">
    <div className="text">
      <h1>Hello There!</h1>
      <h2>Welcome, I'm Mario Parra, Berlin-based illustrator that focuses on something catchy and not necessarily that over the top if you know what I mean.</h2>
    </div>

    <div className="contact flex justify-between">
      <div className="social flex-center">
        <a className="flex-center mono" href="https://www.behance.net/oqdesign" target="_blank" rel="noopener">Behance</a>
        <a className="flex-center mono" href="https://www.instagram.com/marioparramario/" target="_blank" rel="noopener">Instagram</a>
        <a className="flex-center mono" href="https://dribbble.com/oqdesign" target="_blank" rel="noopener">Dribbble</a>
      </div>

      <a href="mailto:hello@marioparra.art">hello@marioparra.art</a>
    </div>
  </section>
);
