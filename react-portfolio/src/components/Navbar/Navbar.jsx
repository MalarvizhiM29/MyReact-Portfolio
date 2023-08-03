import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className="navbar">
        <div className={color ? "header header-bg" : "header"}>
          <Link to="/">
            <h1 className="title">Portfolio.</h1>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="list">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="list">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="list">
              <Link to="/education" className="link">
                Education
              </Link>
            </li>
            <li className="list">
              <Link to="/portfolio" className="link">
                Portfolio
              </Link>
            </li>
            <li className="list">
              <Link to="/contacts" className="link">
                Contacts
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#333" }} />
            ) : (
              <FaBars size={20} style={{ color: "#333" }} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
