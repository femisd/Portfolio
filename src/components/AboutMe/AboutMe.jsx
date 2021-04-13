import React from 'react';
import './AboutMe.css';
import profilePic from '../../img/prof.jpg';
import Terminal from '../Terminal/Terminal';
import Typewriter from 'typewriter-effect';

function AboutMe() {
    const content = (
        <div className="aboutContainer">
            <div className="aboutMeOuter">
                <div className="aboutMeInner">
                    <div className="innterIntroPar">
                        <div className="imageWrapper">
                            <img src={profilePic} alt="Profile Pic" className="profilePic" />
                        </div>
                        <div className="introMonologDiv">
                            <h1 style={{ fontSize: "3.5vh" }}>
                                Hi my name is <span style={{fontWeight: 'bold'}}>Femi</span> 👋 <br />
                                
                            <Typewriter
                                    options={{
                                        strings: ['I am a  <span style="color: #27ae60;">Software Engineer</span>', ' I am a <span style="color: #e6bc49;">Web Developer</span>', 'I am a <span style="color: #e83f3f;">Full-Stack Developer</span>'],
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 1500
                                    }}
                                />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skillsOuter">
                <div className="technicalSkillDiv" >
                    <div className="terminalHead">
                        <ul className="terminalBar">
                            <li className="terminalName">
                                <svg className="terminalIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z" /></svg>
                                My_Skills.exe
                            </li>
                            <li className="terminalWindowElement">
                                <span style={{ fontSize: "2.6rem", fontWeight: "lighter", marginLeft: "0.5vw", marginRight: "0.5vw" }}>˟</span>
                            </li>
                            <li className="terminalWindowElement">
                                <span style={{ marginLeft: "0.5vw", marginRight: "0.5vw" }}>□</span>
                            </li>
                            <li className="terminalWindowElement">
                                <span style={{ marginLeft: "0.5vw", marginRight: "0.5vw" }}>_</span>
                            </li>
                        </ul>
                        <Terminal />
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div>
            {content}
        </div>
    );
}

export default AboutMe;
