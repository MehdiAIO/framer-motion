import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Nav />
          <Routes path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
