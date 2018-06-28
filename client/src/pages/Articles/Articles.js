import React, { Component } from "react";
import API from "../../utils/api";
import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

    loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({})
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.url) {
      API.saveArticle({
        title: this.state.title,
        date: this.state.date,
        url: this.state.url
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return ( null );
  }
}

export default Articles;
