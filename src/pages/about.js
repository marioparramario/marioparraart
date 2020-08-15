import React from "react";
import "../styles/about.scss";


const About = props => (

  <section className="about flex-vertical">

    <div className="container">
      <div className="about-me flex justify-end align-center">
        <img src="https://res.cloudinary.com/oqdesign/image/upload/v1597508883/about/about-vertical_jloieq.jpg"></img>
      </div>
      <div className="text">
        <h1>Hello There!</h1>
        <p>As a kid, I spent most of my days immersed in the solitude of my room, drawing and painting whatever it was in my mind. As I continued, the possibilities only expanded with time and dedication to the learning of art fundamentals.<br />As soon as I understood the principles that rule design and learn collaborative work, I started to feel suffocated by the confinement of the institution. So I dropped out of university to continue my career as an autodidact. <br /> Since there, I've been exploring and combining multiple disciplines as a freelancer, working with inspiring people, constantly learning cool stuff, and more importantly, pushing the boundaries of my creative potential.<br />In many ways I'm still that kid, always looking for something new.<br />If you've read this far, I think it should be self-evident that I love what I do.</p>
      </div>

    </div>
  </section>
);

export { About };

