import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import Aboutme from "../components/About/Aboutme";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Myskills from "../components/Myskills";
import Project from "../components/Project";

const Home = () => {
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
          <Hero />
          <Aboutme />
          <Myskills />
          <Project />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
