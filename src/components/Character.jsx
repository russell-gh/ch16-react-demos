import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Controls from "./Controls";
import Img from "./Img";

class Character extends Component {
  render() {
    const {
      quote,
      character,
      characterDirection,
      image,
      index,
      visible,
      highlight,
      deleted,
      liked,
      toggleLikeDelete,
    } = this.props;
    return (
      <div
        key={index}
        className="character"
        style={{ display: !visible ? "none" : "flex", paddingBottom: "20px",
        alignItems: "center"}}
      >
        <div>
          <Img img={image} direction={characterDirection} />
        </div>
        <div>
          <Name name={character} highlight={highlight} />
          <Quote quote={quote} highlight={highlight} />

          <div>
            <Controls
              index={index}
              liked={liked}
              visible={visible}
              deleted={deleted}
              toggleLikeDelete={toggleLikeDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
