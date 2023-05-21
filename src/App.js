import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DaNas from "./pages/Data_Nasabah";
import VerNas from "./pages/Verifikasi_Nasabah";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/danas" element={<DaNas />} />
        <Route path="/vernas" element={<VerNas />} />
      </Routes>
    </div>
  );
}

export default App;
