import React from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  let x;
  Axios({
    method: "GET",
    url: "http://localhost:9292/",
    headers: {
      // "Access-Control-Request-Headers":
        // "X-PINGOTHER, Content-Type, Access-Control-Allow-Origin",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => {
      x = res.data;
      console.log(x)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{console.log(x)}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
