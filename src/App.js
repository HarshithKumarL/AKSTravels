import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <Router>
      <div className="bg-AppleCore min-h-screen text-Blueberry font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
