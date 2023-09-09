import React, { Component } from "react";

import request from "../server/request";
import Card from "../components/cards/Card";

import "../sass/pages/home.scss";

export class HomePage extends Component {
  state = {
    news: [],
  };

  async getPosts() {
    try {
      let { data } = await request(
        "top-headlines?country=us&apiKey=6062c2834a074240aef382ff731284d1"
      );
      this.setState({ news: data.articles });
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { news } = this.state;
    return (
      <section id="home-section">
        <div className="container home__container">
          <h1>Our Latest Posts</h1>
          <div className="news__block">
            {news.map((article, i) => (
              <Card key={i} {...article} />
            ))}
          </div>
          <div className="pagination"></div>
        </div>
      </section>
    );
  }
}

export default HomePage;
