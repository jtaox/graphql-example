import React, { Component } from "react";
import "./App.css";

const API_GRAPHQL = "http://localhost:3000/graphql";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      contentEditableId: null
    };
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
      });
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

  onEdit(id) {
    return () => {
      this.setState({ contentEditableId: id });
    };
  }

  onEnter = evt => {
    if (evt.key === "Enter") {
      console.log(evt.target.innerText);
      evt.preventDefault();
      this.setState({ contentEditableId: null });
    }
  };

  render() {
    const { articles, contentEditableId } = this.state;

    return (
      <div className="App">
        <ol className="Articles">
          {articles.map(({ title, id }) => (
            <li key={id}>
              <span
                suppressContentEditableWarning={true}
                contentEditable={contentEditableId === id}
                onKeyPress={this.onEnter}
              >
                {title}
              </span>
              <span className="Operation">
                <span onClick={this.onEdit(id)}>编辑</span>
                <span>删除</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
