import React from 'react';
import './Projects.scss';
import acvera from '../../img/acvera.PNG';
import fitpic from '../../img/fitpic.PNG';
import munch from '../../img/munch.PNG';
import stalling from '../../img/stalling.PNG';
import bookhub from '../../img/bookhub.PNG';
import delivery from '../../img/delivery.jpg';



function Projects() {
    const content = (
        <div className="projectsContainer">
            <div className="projectsOuter">
                <h1 className="projectsHeader">
                    Projects
                </h1>
                    <div className="porjRow1">
                        <div className="projCol">
                            <img className="projImg" src={acvera} alt="acvera" />
                        </div>
                        <div className="projCol">
                            <img className="projImg" src={delivery} alt="acvera" />
                        </div>
                        <div className="projCol">
                            <img className="projImg" src={bookhub} alt="acvera" />
                        </div>
                    </div>
                    <div className="porjRow1">
                        <div className="projCol">
                            <img className="projImg" src={stalling} alt="acvera" />
                        </div>
                        <div className="projCol">
                            <img className="projImg" src={munch} alt="acvera" />
                        </div>
                        <div className="projCol">
                            <img className="projImg" src={fitpic} alt="acvera" />
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

export default Projects;
