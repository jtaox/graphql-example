import React, { Component } from "react";
import "./App.css";

const API_GRAPHQL = "http://localhost:3000/graphql";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      search: '',
      contentEditableId: null
    };
  }

  componentDidMount() {
    this.post(
      `
      {
        articles { title, id, create_time }
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

  onSearchChange = (evt) => {
    const value = evt.target.value

    this.setState({
      search: value
    })
  }

  render() {
    const { articles, contentEditableId, search } = this.state;

    return (
      <div className="App">
        <div className="Search">
          <input placeholder="搜索" value={search} onChange={this.onSearchChange} />
        </div>
        <ol className="Articles">
          {articles.map(({ title, id, create_time }) => (
            <li key={id}>
              <span
                suppressContentEditableWarning={true}
                contentEditable={contentEditableId === id}
                onKeyPress={this.onEnter}
              >
                {title}
              </span>
              <span className="createTime">{create_time}</span>
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
