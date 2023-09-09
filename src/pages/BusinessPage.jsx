import React, { Component } from "react";

import request from "../server/request";
import BusinessCard from "../components/cards/BusinessCard";

import "../sass/pages/business.scss";

export class BusinessPage extends Component {
  state = {
    newData: [],
  };
  async getPosts() {
    try {
      let { data } = await request(
        "top-headlines/sources?category=business&apiKey=6062c2834a074240aef382ff731284d1"
      );
      this.setState({ newData: data.sources });
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { newData } = this.state;
    console.log(newData);
    return (
      <section id="business-section">
        <div className="container business__container">
          <h1>Business News</h1>
          <div className="news__block">
            {newData.map((article, i) => (
              <BusinessCard key={i} {...article} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BusinessPage;
