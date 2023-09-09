import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}

export default NotFoundPage;
