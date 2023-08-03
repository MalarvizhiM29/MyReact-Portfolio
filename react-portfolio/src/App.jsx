import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Education from "./routes/Education";
import Portfolio from "./routes/Portfolio";
import Contacts from "./routes/Contacts";
import About from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
