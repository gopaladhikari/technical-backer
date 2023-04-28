import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import TitleAndScrollRestoration from "./Components/TitleAndScrollRestoration";
import Alert from "./Components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, state) => {
    setAlert({
      message: message,
      state: state,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <BrowserRouter>
      <TitleAndScrollRestoration />
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route path="/technical-backer-vite/" element={<Home />} />
        <Route path="/technical-backer-vite/about" element={<About />} />
        <Route path="/technical-backer-vite/services" element={<Services />} />
        <Route
          path="/technical-backer-vite/contact"
          element={<Contact alert={alert} showAlert={showAlert} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
