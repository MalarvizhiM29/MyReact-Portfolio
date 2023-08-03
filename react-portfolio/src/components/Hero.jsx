import React from "react";
import "./Hero.css";
import bgimage from "../assets/malar.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="bg-img" src={bgimage} alt="bgimg" />
      </div>
      <div className="content">
        <h3>
          HI, I'M <span className="myname">MALARVIZHI M</span>
        </h3>
        <p>Full Stack Developer</p>
        <div className="icons">
          <a href="https://github.com/MalarvizhiM29" target="_blank">
            <i className="fa-brands fa-b fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/malarvizhi-m-96885b223/"
            target="_blank"
          >
            <i className="fa-brands fa-b fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100055980761286&mibextid=ZbWKwL"
            target="_blank"
          >
            <i className="fa-brands fa-b fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://instagram.com/onceinabluemoon_294?igshid=NGExMmI2YTkyZg=="
            target="_blank"
          >
            <i className="fa-brands fa-b fa-instagram fa-2x"></i>
          </a>
        </div>
        <div className="button">
          <a
            href="https://drive.google.com/file/d/1GYaLY1iwbB1eVHGdczJ3vWec3rGFnywX/view?usp=sharing"
            target="_blank"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
