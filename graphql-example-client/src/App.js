import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const API_GRAPHQL = 'http://localhost:3000/graphql'

class App extends Component {

  componentDidMount() {
    this.post(`
      {
        hello
      }
    `)
  }

  post(query) {
    return fetch(API_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query
      })
    }).then(r => r.json());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
}

export default App;
