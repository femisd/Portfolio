import React from 'react';
import './Terminal.scss';

function Terminal() {
  function getToday() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = monthNames[today.getMonth()] //January is 0!
    const yyyy = today.getFullYear();
    today = dd + ' ' + mm + ' ' + yyyy;
    return today;
  }
  const content = (
    <div className="container">
      <div className="consoleInfo">C:\Users\Femi{'>'}python</div>
      <div className="consoleInfo">Python 3.8.1 (tags/v3.8.1:1b293b6, {getToday()}) [MSC v.1916 32 bit (Intel)] on win32</div>

      <div className="row1 consoleInfo">
        <div className="console"> {'>'} </div>
        <div className="console">{'>'} </div>
        <div className="console">{'>'} </div>
        <div className="console">&nbsp;</div>
        <div className="letter">p</div>
        <div className="letter">r</div>
        <div className="letter">i</div>
        <div className="letter">n</div>
        <div className="letter">t</div>
        <div className="letter">(</div>
        <div className="letter">m</div>
        <div className="letter">y</div>
        <div className="letter">_</div>
        <div className="letter">s</div>
        <div className="letter">k</div>
        <div className="letter">i</div>
        <div className="letter">l</div>
        <div className="letter">l</div>
        <div className="letter">s</div>
        <div className="letter">)</div>
      </div>
      <div className="row2">
        <div className="letter consoleHeader">Front-end:</div>
      </div>
    <div className="row2">
        <div className="letter consoleSub">&nbsp; - React <i className="fab fa-react"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - Vue <i className="fab fa-vuejs"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - CSS <i className="fab fa-css3-alt"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - TypeScript <i className="fab fa-js"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - React Native <i className="fab fa-react"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleHeader">Back-end:</div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - NodeJs <i className="fab fa-node-js"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - Java / Kotlin <i className="fab fa-java"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - C++ <i className="fas fa-file-alt"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - C# <i className="far fa-window-maximize"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - Python <i className="fab fa-python"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - Socket.IO <i className="fas fa-project-diagram"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - Spring Boot <i className="fas fa-leaf"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleHeader">Databases:</div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - PostgreSQL <i className="fas fa-server"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - MySql <i className="fas fa-database"></i></div>
      </div>
      <div className="row2">
        <div className="letter consoleSub">&nbsp; - MongoDB <i className="fab fa-envira"></i></div>
      </div>
      <div className="row3 consoleInfo">
        <div className="console consoleInfo">{'>'} </div>
        <div className="console consoleInfo">{'>'} </div>
        <div className="console consoleInfo">{'>'} </div>
        <div className="console">&nbsp;</div>
        <div className="letter"> </div>
        <div className="cursor"></div>
      </div>
    </div>
  )
  return (
    <div>
      {content}
    </div>
  );
}

export default Terminal;
