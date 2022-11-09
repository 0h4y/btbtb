import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
import Home from "./Home";
import Booking from "./Booking";
import { Link, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
}
