import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
        <p>This is a simple introduction page created with React and TypeScript.</p>
        <p>
          My name is John Doe, a software developer with a passion for creating amazing web applications.
        </p>
        <p>
          <a
            className="App-link"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my GitHub
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
