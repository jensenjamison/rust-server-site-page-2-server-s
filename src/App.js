import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      
      <section className="nav-bar">
        <button className="home-button">Home</button>
      <div className="nav-right">
        <button className="servers-button">Server's</button>
        <button className="kits-button">Kit's</button>
        <button className="contact-button">Contact</button>
      </div>
    </section>

    <section className="servers-list">
      <div className="server-1">
        <div className="server-title">
        <h1>---Blanks--- Server 1</h1>
        </div>
        <div className="information-kits">
        <div>
        <button className="information-button">Information</button>
        </div>
        <div className="kits">
        <button className="kits-button-2">Kits</button>
        </div>
        </div>
      </div>

      <div className="server-2">
        <div className="server-title">
        <h1>---Blanks--- Server 2</h1>
        </div>
        <div className="information-kits">
        <div>
        <button className="information-button">Information</button>
        </div>
        <div className="kits">
        <button className="kits-button-2">Kits</button>
        </div>
        </div>
      </div>

      <div className="server-3">
        <div className="server-title">
        <h1>---Blanks--- Server 3</h1>
        </div>
        <div className="information-kits">
        <div>
        <button className="information-button">Information</button>
        </div>
        <div className="kits">
        <button className="kits-button-2">Kits</button>
        </div>
        </div>
      </div>
    </section>

    </body>
  );
}

export default App;
