import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import MyPortfolio from "../components/MyPortfolio";
import Footer from "../components/Footer/Footer";
import { PacmanLoader } from "react-spinners";

const Portfolio = () => {
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
          <MyPortfolio />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
