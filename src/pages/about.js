import React from "react";
import "../styles/about.scss";


const About = props => (

  <section className="about flex-vertical">

    <div className="container">
      <div className="about-intro flex justify-center align-center">
        <img src="https://res.cloudinary.com/oqdesign/image/upload/v1597511075/about/about-vertical-alt_zzud4w.jpg"></img>
        <div className="about-intro-text">
        <h1>Hello There!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      </div>
      

    </div>
  </section>
);

export { About };

