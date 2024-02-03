import React, { Component } from "react";
class Img extends Component {
  render() {
    return (
      <>
        <image
          src={this.props.img}
          alt="simpsons-img"
          width="100"
          height="100"
        ></image>
      </>
    );
  }
}

export default Img;
