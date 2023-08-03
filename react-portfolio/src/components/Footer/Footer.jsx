import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-container">
        <h3>Contact Me</h3>
        <div className="content">
          <ul>
            <div className="box1">
              <li className="flat-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/3082/3082383.png" />
                <span>Tiruppur</span>
              </li>
              <li className="flat-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png" />
                <span>+91 8248329209</span>
              </li>
              <li className="flat-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" />
                <span>malarm2004@gmail.com</span>
              </li>
            </div>
            <hr></hr>
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
            <hr></hr>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
