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
      deleted,
    } = this.props;
    return (
      <div
        key={index}
        className="character"
        style={!{ visible } ? { display: "none" } : {}}
      >
        <div>
          <Name name={character} />
        </div>

          <Img img={image} />

        <div>
          <Quote quote={quote} />
        </div>
        <div>
          <Controls index={index}/>
        </div>

        <div className="quote">{quote}</div>
        <h2 className="name">{character}</h2>
      </div>
    );
  }
}

export default Character;
