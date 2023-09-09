import React, { Component } from "react";
import request from "../server/request";

import "../sass/pages/NEW.scss";

export class NewPage extends Component {
  state = {
    new: [],
  };

  async getPosts() {
    try {
      let { data } = await request(
        "top-headlines?country=us&apiKey=6062c2834a074240aef382ff731284d1"
      );
      this.setState({ new: data.articles });
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    return <div>NewPage</div>;
  }
}

export default NewPage;
