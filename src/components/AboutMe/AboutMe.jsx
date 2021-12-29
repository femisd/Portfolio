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
                                <span>
                                    <i className="fas fa-window-maximize"></i> MySkills.exe
                                </span>
                            </li>
                            <li className="terminalWindowElement">
                                <span style={{fontWeight: "lighter", marginLeft: "0.1vw", marginRight: "0.1vw" }}><i className="fas fa-times"></i></span>
                            </li>
                            <li className="terminalWindowElement">
                                <span style={{ marginLeft: "0.1vw", marginRight: "0.1vw" }}><i className="fas fa-window-restore"></i></span>
                            </li>
                            <li className="terminalWindowElement">
                                <span style={{ marginLeft: "0.1vw", marginRight: "0.1vw" }}><i className="fas fa-window-minimize"></i></span>
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
