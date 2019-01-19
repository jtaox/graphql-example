import React, { Component } from "react";
import "./App.css";

const API_GRAPHQL = "http://localhost:3000/graphql";

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.post(
      `
      {
        articles { title, id }
      }
    `
    ).then(result => {
      this.setState({
        articles: result.articles
      })
    });
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
    })
      .then(r => r.json())
      .then(json => json.data);
  }

  render() {
    const {
      articles,
    } = this.state

    return (
      <div className="App">
        <ol>
          {articles.map(({title, id}) => <li key={id}>{title}</li>)}
        </ol>
      </div>
    );
  }
}

export default App;
