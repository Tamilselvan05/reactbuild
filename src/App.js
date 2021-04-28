// import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <div>
            Environment:<b>{process.env.NODE_ENV}</b>
          </div>
          <div>
            Version:<b>{process.env.REACT_APP_VERSION}</b>
          </div>
          <div>
            URL:<b>{process.env.REACT_APP_URL}</b>
          </div>
          {/* <div>
            RRRR:<b>{process.env.BASEURL + "process"}</b>
          </div> */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
