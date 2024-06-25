import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Artworks from "./components/Artworks";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Background from "./components/StarryBackground";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Background />
      <NavBar />
      <main>
        <Home />
        <About />
        <Projects />
        <Artworks />
        <Footer />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
