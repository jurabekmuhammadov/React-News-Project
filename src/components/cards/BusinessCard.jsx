import React, { Component } from "react";

import "./BusinessCard.scss";
export class BusinessCard extends Component {
  render() {
    const {  name, description, url, } =
      this.props;
    return (
      <div className="business-card">
        <h3> {name}</h3>
        <p>{description}</p>
        <a className="link" href={url}>
          Go to official website
        </a>
      </div>
    );
  }
}

export default BusinessCard;
