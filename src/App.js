import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
       <div className="navDiv">
                <ul className="navBar">
                    <li className="navElement">
                        <a>Hackathons</a>
                    </li>
                    <li className="navElement">
                        <a>Projects</a>
                    </li>
                    <li className="navElement">
                        <a>About me</a>
                    </li>
                </ul>
      </div>
      <Intro />
      <AboutMe />
    </div>
  );
}

export default App;
