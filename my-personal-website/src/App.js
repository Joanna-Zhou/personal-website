import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
// import StarryBackground from './components/StarryBackground';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
  }
  h1, h2 {
    margin: 0;
    padding: 1rem 0;
  }
  p {
    margin: 1rem 0;
  }
`;

const App = () => (
  <div>
    <GlobalStyle />
    {/* <StarryBackground /> */}
    <Header />
    <main>
      <Home />
      <About />
      <Gallery />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
