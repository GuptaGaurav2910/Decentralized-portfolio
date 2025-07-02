import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".text", {
      strings: ["Blockchain Developer . . ", "Programmer . . .", "Full Stack Developer . . ."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me,</h3>
          <h1>Gaurav Gupta.</h1>
          <h3>And I'm a <span className="text"></span></h3>
          <p>Developed decentralized apps in web3 space <br />and Full Stack Applications.</p>
          <div className="home-sic">
            <a href="https://www.linkedin.com/in/gaurav-g-8337b6234/" style={{ "--i": 6 }}><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/GuptaGaurav2910" style={{ "--i": 7 }}><i className="fa-brands fa-github"></i></a>
            <a href="/" style={{ "--i": 8 }}><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://x.com/gauravg10548425" style={{ "--i": 9 }}><i className="fa-brands fa-twitter "></i></a>
          </div>
          <a href="#about" className="btn">More About Me</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
