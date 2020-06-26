import React from 'react';
import './App.scss';
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <div className="navDiv">
        <ul className="navBar">
          <li className="navElement">
            <a
            // onClick={() => scroller.scrollTo('Intro', {
            //   duration: 1500,
            //   delay: 100,
            //   smooth: true,
            //   offset: 0,
            // })}
            >Hackathons</a>
          </li>
          <li className="navElement"
            onClick={() => scroller.scrollTo('Projects', {
              duration: 1500,
              delay: 100,
              smooth: true,
              offset: -50,
            })}>
            <a>Projects</a>
          </li>
          <li className="navElement"
            onClick={() => scroller.scrollTo('AboutMe', {
              duration: 1500,
              delay: 100,
              smooth: true,
              offset: -50,
            })}>
            <a>About me</a>
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
