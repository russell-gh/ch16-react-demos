import React, { Component } from "react";
class Img extends Component {
  render() {
    return (
      <>
        <img
          style={
            this.props.direction == "Right" ? { transform: "scale(-1,1)" } : {}
          }
          src={this.props.img}
          alt="simpsons-character"
          width="100"
        />
      </>
    );
  }
}

export default Img;
