import React, { Component } from "react";

class News extends Component {
  render() {
    const { news } = this.props;

    return (
      <div>
        <p>{news}</p>
      </div>
    );
  }
}

export default News;
