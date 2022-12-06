import React from "react";
import "./App.css";
import Index from "./layout/Index";
import { Routes, Route } from "react-router-dom";
import About from "./views/About";
import Menu from "./views/Menu";
import Contact from "./views/Contact";
import Undefined from "./views/Undefined";
import Register from "./components/Register";

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </div>
  );
}

export default App;
