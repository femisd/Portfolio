import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro'

function App() {
  return (
    <div className="App">
       <div className="navDiv">
                <ul className="navBar">
                    <li>
                        <a>Hackathons</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>About me</a>
                    </li>
                </ul>
            </div>
      <Intro />
    </div>
  );
}

export default App;
