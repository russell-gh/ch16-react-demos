import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    let view = this.props.view;
    return this.props.characters.map((item) => {
      return (view != "deleted") & item.deleted ? null : (
        <Character key={item.index} {...item} toggleLikeDelete={this.props.toggleLikeDelete} />
      );
    });
  }
}

export default Characters;
