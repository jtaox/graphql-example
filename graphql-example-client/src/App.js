import React, { Component } from "react";
import "./App.css";

import request from './utils/request'

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
        articles { 
          title 
          id
          create_time
          user {
            user_name
            id
          }
        }
      }
    `
    ).then(result => {
      this.setState({
        articles: result.articles
      });
    });
  }

  post(query) {
    return request({query})
  }

  onEdit(id) {
    return () => {
      this.setState({ contentEditableId: id });
    };
  }

  onEnter = evt => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      this.setState({ contentEditableId: null });
    }
  };

  search = (keyword) => {
    this.post(
      `
      {
        search(text: ${keyword}) { 
          ... on Article {
            title
          }
          ... on User {
            user_name
          }
        }
      }
    `
    ).then(result => {
      this.setState({
        articles: result.articles
      });
    });
  }

  onSearchChange = (evt) => {
    const value = evt.target.value
  
    this.setState({
      search: value
    })
  }

  onKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.search(this.state.search)
    }
  }

  render() {
    const { articles, contentEditableId, search } = this.state;

    return (
      <div className="App">
        <div className="Search">
          <input placeholder="搜索" value={search} onKeyPress={this.onKeyPress} onChange={this.onSearchChange} />
          <button>搜索</button>
        </div>
        <ol className="Articles">
          {articles.map(({ title, id, create_time, user = {} }) => (
            <li key={id}>
              <span
                suppressContentEditableWarning={true}
                contentEditable={contentEditableId === id}
                onKeyPress={this.onEnter}
              >
                {title}
              </span>
              <span className="user">By: {user.user_name}</span>
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
