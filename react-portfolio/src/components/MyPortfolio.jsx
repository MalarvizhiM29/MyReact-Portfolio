import React from "react";
import "./MyPortfolio.css";
import Project from "./Project";
import Certificate from "./Certificate";

const MyPortfolio = () => {
  return (
    <div className="main-content">
      <h1 className="project-heading">Projects</h1>
      <Project />
      <Certificate />
    </div>
  );
};

export default MyPortfolio;
