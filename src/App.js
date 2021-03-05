import React from 'react';
import './App.scss';
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import { Element, scroller } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="navDiv">
        <ul className="navBar">
          <li className="navElement">
            <span>Hackathons</span>
          </li>
          <li className="navElement"
            onClick={() => scroller.scrollTo('Projects', {
              duration: 1500,
              delay: 100,
              smooth: true,
              offset: -50,
            })}>
            <span>Projects</span>
          </li>
          <li className="navElement"
            onClick={() => scroller.scrollTo('AboutMe', {
              duration: 1500,
              delay: 100,
              smooth: true,
              offset: -50,
            })}>
            <span>About me</span>
          </li>
        </ul>
      </div>
      <Element name="Intro">
        <Intro />
      </Element>

      <Element name="AboutMe">
        <AboutMe />
      </Element>

      <Element name="Projects">
        <Projects />
      </Element>
    </div>
  );
}

export default App;
