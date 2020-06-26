import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

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
      <Projects />
    </div>
  );
}

export default App;
