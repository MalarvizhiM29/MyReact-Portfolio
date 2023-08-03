import React, { useEffect, useState } from "react";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { PacmanLoader } from "react-spinners";

const Education = () => {
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
          aria-label="Loading Pacman"
          data-testid="loader"
          className="loader"
        />
      ) : (
        <div>
          <Navbar />
          <h2>Education</h2>
          <Timeline />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Education;
