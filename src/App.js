import React from "react";
import "./App.css";
import Index from "./layout/Index";
import { Routes, Route } from "react-router-dom";
import About from "./views/About";
import Menu from "./views/Menu";
import Undefined from "./views/Undefined";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Undefined />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      {/* <Index /> */}
    </div>
  );
}

export default App;
