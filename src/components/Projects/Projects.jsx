import React, { useState } from 'react';
import './Projects.scss';
import acvera from '../../img/acvera.PNG';
import fitpic from '../../img/fitpic.PNG';
import munch from '../../img/munch.PNG';
import stalling from '../../img/stalling.PNG';
import bookhub from '../../img/bookhub.PNG';
import delivery from '../../img/delivery.jpg';
import melody from '../../img/melody.PNG';
import chess from '../../img/chess.PNG';
import Modal from 'react-bootstrap/Modal';

function Projects() {

    const [show, setShow] = useState(false);

    const [modalTitle, setModalTitle] = useState("");
    const [modalBody, setModalBody] = useState();
    const [modalFooter, setModalFooter] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (modalNum) => {
        setShow(true);

        switch (modalNum) {
            case 1:
                setModalTitle("Acvera");
                setModalBody(
                    <div>
                        <p>
                            Developed the landing page of <a href="https://www.acvera.co.uk/" target="_blank">acvera.co.uk</a> and it's companion mobile application Novel.
                            Acvera is an AI assisted software development platform that aims to make the software development process faster and more accessible.
                        </p>
                        <p>
                            Novel is an iOS/Android mobile application made with the assistance of Acvera, designed to help users manage their GP visits and keep themselves and others safe by
                            broadcasting an anonymous location signal if they feel unwell which contributes towards creating a map of potential virus outbreak areas.
                        </p>
                    </div>);
                setModalFooter(
                    <p><span style={{ fontWeight: "bold" }}>Technologies used: </span>ReactJS, React Native, ExpressJs, Firebase Database, MongoDB, Google Maps API</p>
                );
                break;

            case 2:
                setModalTitle("Same Day Delivery");
                setModalBody(
                    <div>
                        <p>
                            Same Day Delivery is a physics based mobile game available on Android that contains a variety of fun but challenging levels.
                            The goal of the game is to deliver a package to the delivery truck in the least amount of moves by utilising the 'drag and shoot' movement system and the dynamic geometry of the levels.
                        </p>
                        <p><a href="https://github.com/femisd/SameDayDelivery" target="blank_">Check it out on GitHub!</a></p>
                    </div>);
                setModalFooter(
                    <p><span style={{ fontWeight: "bold" }}>Technologies used: </span>Unity3D, C#, GIMP</p>
                );
                break;

            case 3:
                setModalTitle("BookHub");
                setModalBody(
                    <div>
                        <p>
                            BookHub is an online co-writing platform that was created as an entry to the 2018 HackSussex 24 hours hackathon. <br />
                            BookHub is a web application created with a Spring backend and ReactJs frontend that allows users to upload or write their books which can be corrected or contributed to by the community.
                            The platform features a Git style branch system where users could branch off of any book on the platform, create their own additions or alterations and present it to be reviewed by the original author and the community.
                        </p>
                        <p><a href="https://bitbucket.org/andrei_vanvu/web-dev-project/src/master/" target="blank_">Check it out on Bitbucket!</a></p>
                    </div>);
                setModalFooter(
                    <p><span style={{ fontWeight: "bold" }}>Technologies used: </span>Spring, MongoDB, ReactJS, BootStrap</p>
                );
                break;

            case 4:
                setModalTitle("They See Me Stalling");
                setModalBody(
                    <div>
                        <p>
                            This project was an entry to the 2019 Hack Surrey 24 hours hackathon.

                            For this project we tried to push our understanding of React Js to it's limits, so we built a custom game engine with only React, HTML, CSS and WebSockets a to emulate a 2D driving game with multiplayer controls.
                        </p>
                        <p><a href="https://bitbucket.org/andrei_vanvu/web-dev-project/src/master/" target="blank_">Check it out on Bitbucket!</a></p>
                    </div>);
                setModalFooter(
                    <p><span style={{ fontWeight: "bold" }}>Technologies used: </span>Socket io, ReactJS, SCSS</p>
                );
                break;

            case 5:
                setModalTitle("Moody Melody");
                setModalBody(
                    <div>
                        <p>This project was an entry to HackSurrey 2021. It is a webapp that connects to your music library through the Spotify Api, scrapes the lyrics of your favorite songs and analyses them with IBM's Watson Neural Network to determine the sentiment and mood of your music taste. </p>
                        <p><a href="https://github.com/Hackathon-Buddies/MoodyMelody" target="blank_">Check it out on Github!</a></p>
                    </div>);
                setModalFooter(
                    <p><span style={{ fontWeight: "bold" }}>Technologies used: </span>ReactJS, CSS, Spotify API, IBM Watson, TasteDive API</p>
                );
                break;

            case 6:
                setModalTitle("Spicy Chess");
                setModalBody(
                    <div>
                        <p>This project was an entry to the HackOxford 2020 hackathon. We built a multiplayer chess game in React JS, using an Express Server with Socket IO WebSockets. The game is a lot like normal chess but with a twist. At every turn there is a chance of a random miracle/disaster effecting the battle field such as resurrection of a unit or the spread of a devastating plage. Try it out <a href="https://spicy-chess.netlify.app/" target="_blank"> here </a> </p>
                        <p><a href="https://github.com/Hackathon-Buddies/Spicy-Chess" target="blank_">Check it out on Github!</a></p>
                    </div>);
                setModalFooter(
                    <p><span style={{ fontWeight: "bold" }}>Technologies used: </span>Socket io, Express, ReactJS, CSS, Canvas</p>
                );
                break;
        }


    };


    const content = (
        <div className="projectsContainer">
            <div className="projectsOuter">
                <h1 className="projectsHeader">
                    Personal Projects
                </h1>
                <div className="porjRow1">
                    <div className="projCol" onClick={() => handleShow(1)}>
                        <img className="projImg" src={acvera} alt="acvera" />
                    </div>
                    <div className="projCol" onClick={() => handleShow(2)}>
                        <img className="projImg" src={delivery} alt="delivery" />
                    </div>
                    <div className="projCol" onClick={() => handleShow(3)}>
                        <img className="projImg" src={bookhub} alt="bookhub" />
                    </div>
                </div>
                <div className="porjRow1">
                    <div className="projCol" onClick={() => handleShow(4)}>
                        <img className="projImg" src={stalling} alt="stalling" />
                    </div>
                    <div className="projCol" onClick={() => handleShow(5)}>
                        <img className="projImg" src={melody} alt="moody melody" />
                    </div>
                    <div className="projCol" onClick={() => handleShow(6)}>
                        <img className="projImg" src={chess} alt="spicy chess" />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>
                <Modal.Footer>{modalFooter}</Modal.Footer>
            </Modal>

        </div>
    )
    return (
        <div>
            {content}
        </div>
    );
}

export default Projects;
