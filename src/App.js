import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
// import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hm/>} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

const Hm = () => (
  <div>
    <h1>Homde</h1>
  </div>
);
export default App;
