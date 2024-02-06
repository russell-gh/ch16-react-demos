import React, { Component } from "react";

class AlbumItem extends Component {
  render() {
    const { id, title, url, thumbnailUrl, onDeleteItem } = this.props;

    return (
      <div key={id}>
        <h1>{title}</h1>
        <a href={url}>
          <img src={thumbnailUrl} alt={title} />
        </a>
        <button onClick={() => onDeleteItem(id)}>Delete</button>
      </div>
    );
  }
}

export default AlbumItem;
