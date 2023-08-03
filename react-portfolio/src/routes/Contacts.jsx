import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Contactme from "../components/Contacts/Contactme";

const Contacts = () => {
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
          <Contactme />
        </div>
      )}
    </div>
  );
};

export default Contacts;
