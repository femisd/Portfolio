import React from 'react';
import './Intro.css';
import Particles from 'react-particles-js';

function Intro() {
    const content = (
        <div className="headOuter">
            <Particles
                className={"particles"}
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 800 // Denser the smaller the number.
                            }
                        },
                        color: { // The color for every node, not the connecting lines.
                            value: "#f73939" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
                        },
                        shape: {
                            type: "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
                            stroke: { // The border
                                width: 0,
                                color: "#311d3f"
                            },
                            polygon: { // if the shape is a polygon
                                nb_sides: 5
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true
                        },
                        size: {
                            value: 10,
                            random: true
                        },
                        line_linked: {
                            enable: false,
                            distance: 200, // The radius before a line is added, the lower the number the more lines.
                            color: "#311d3f",
                            opacity: 0.8,
                            width: 2
                        },
                        move: {
                            enable: true,
                            speed: 5,
                            direction: "none", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
                            random: false,
                            straight: false, // Whether they'll shift left and right while moving.
                            out_mode: "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
                            bounce: false,
                            attract: { // Make them start to clump together while moving.
                                enable: true,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    }
                }
                }
            />
            <div className="nameDivWrapper">
                <div className="nameDiv">
                
                        Femi Sodiya <br />
                        Software Developer

                </div>
            </div>
            <div style={{ zIndex: 50}}>
                <a href="https://www.linkedin.com/in/femi-sodiya-5a8bb3182/" target='_blank'><svg  className="svgIntro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                <a href="https://github.com/femisd" target='_blank'><svg className="svgIntro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                <a href="mailto:femisd@gmail.com"><svg className="svgIntro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg></a>
            </div>
        </div>
    )
    return (
        <div>
            {content}
        </div>
    );
}

export default Intro;
