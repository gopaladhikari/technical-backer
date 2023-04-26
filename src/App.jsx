import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services";
import GetInTouch from "./Components/GetInTouch";
import About from "./Components/About";
import Footer from "./Components/Footer";
import TitleAndScrollRestoration from "./Components/TitleAndScrollRestoration";

function App() {
  return (
    <BrowserRouter>
      <TitleAndScrollRestoration />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical-backers" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<GetInTouch />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
