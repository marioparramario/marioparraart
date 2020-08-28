import * as React from "react"
import { Social } from "./Social";
import "../styles/welcome.scss";

export const Welcome = () => (
  <section className="welcome">
    <div className="text">
      <h1>Hello There!</h1>
      <h2>Welcome, I'm Mario Parra, Berlin-based illustrator that focuses on something catchy and not necessarily that over the top if you know what I mean.</h2>
    </div>

    <div className="welcome-info flex justify-end">
      <Social />
    </div>
  </section>
);
