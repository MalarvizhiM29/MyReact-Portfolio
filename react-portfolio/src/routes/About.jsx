import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Aboutme from "../components/About/Aboutme";
import { useState } from "react";
import { useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Footer from "../components/Footer/Footer";
import Myskills from "../components/Myskills";

export const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <PacmanLoader
          color={"#A3A5A5"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
      ) : (
        <div>
          <Navbar />
          <Aboutme />
          <Myskills />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default About;
