import React, { Component } from "react";
import axios from "axios";

class Child extends Component {
  constructor() {
    super();
    console.log("constructor ran, the component is born");
  }

  state = {};

  async componentDidMount() {
    console.log("HTML is now inside the DOM");

    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes`
    );
    this.setState({ simpsons: data });
  }

  render() {
    console.log("render ran, HTML getting created", this.state);

    if (this.state.simpsons) {
      return <p>We have data</p>
    }

    return <p>Loading.....</p>;
  }
}

export default Child;
