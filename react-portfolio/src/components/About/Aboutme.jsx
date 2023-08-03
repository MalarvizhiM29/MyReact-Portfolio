import React from "react";
import "./Aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const Aboutme = () => {
  return (
    <>
      <div id="about" className="container about-page">
        <div className="text-zone">
          <h1 className="abt">About Me</h1>
          <p className="about-me">
            I'm Malarvizhi. I'm pursuing my Bachelor's degree in Engineering. A
            Fullstack web development enthusiast.Dedicated web developer with a
            passion for developing and deploying user-friendly web applications.
          </p>
          <p className="about-me">
            I was passionate about exploring new things and Innovative Ideas.
            Exploring new things is something I love to do. I'm a Programmer and
            I had developed many projects in Websites.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1 face">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2 face">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3 face">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4 face">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5 face">
              <FontAwesomeIcon icon={faBootstrap} color="#6E10EE" />
            </div>
            <div className="face6 face">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Aboutme;
