import React from "react";
import pro3 from "../assets/cakecraft.png";
import pro1 from "../assets/project-2.png";
import pro2 from "../assets/weather2.jpg";
import { NavLink } from "react-router-dom";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div id="portfolio" className="portfolio">
        <div className="port">
          <h1 className="project-heading">Projects</h1>
          <div className="project-container">
            <div className="project-card">
              <img src={pro1} alt="image" />
              <h2 className="project-title">Task Tracker</h2>
              <div className="pro-details">
                <p>
                  MERN-based Task Tracker is a web application designed to
                  optimize task management and collaboration among teams.
                </p>
                <div className="pro-btns">
                  <NavLink
                    to="https://github.com/MalarvizhiM29/todolist1"
                    target="_blank"
                    className="btn-new"
                  >
                    View Repo
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src={pro2} alt="image" />
              <h2 className="project-title">Weather Companion</h2>
              <div className="pro-details">
                <p>
                  Weather Companion Project is a global weather app, providing
                  real-time weather conditions across the world.
                </p>
                <div className="pro-btns">
                  <NavLink
                    to="https://github.com/MalarvizhiM29/Weather-app"
                    target="_blank"
                    className="btn-new"
                  >
                    View Repo
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src={pro3} alt="image" className="cake-img" />
              <h2 className="project-title">CakeCraft</h2>
              <div className="pro-details">
                <p>
                  Cakecraft is a MERN-based managing website that facilitates
                  seamless insertion, updating, and deletion operations for
                  efficient cake management.
                </p>
                <div className="pro-btns">
                  <NavLink
                    to="https://github.com/MalarvizhiM29/CAKECRAFT"
                    target="_blank"
                    className="btn-new"
                  >
                    View Repo
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
