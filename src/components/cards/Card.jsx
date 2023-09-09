import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

export class Card extends Component {
  render() {
    const { source, author, publishedAt, title, urlToImage } = this.props;
    let matches = publishedAt.match(/(\d+)/);

    const toNewPage = (id) => {
      localStorage.setItem("NewId", id);
    };
    return (
      <div className="card">
        <div className="top">
          <span className="author">by {author}</span>
          <span className="date">{matches[0]}</span>
        </div>
        <div className="image">
          <img src={urlToImage} alt={urlToImage} />
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="bottom">
          <Link
            className="cta"
            to="/latest-news/newPage"
            onClick={() => toNewPage(source.name)}
          >
            <span className="hover-underline-animation">Read more</span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="25"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
