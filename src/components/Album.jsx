/* import React, { Component } from "react";
import AlbumItem from "./AlbumItem";

class Album extends Component {
  render() {
    console.log(this.props);
    return this.props.album.map((item, index) => {
      console.log(index, item)
      return (
        <AlbumItem
          {...item}
          onDeleteItem={this.props.onDeleteItem}
          index={index}
        />
      );
    });
  }
}

export default Album; */
