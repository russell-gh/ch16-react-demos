import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("constructor ran, the component is born");
  }

  render() {
    return <p>I am CHILD</p>;
  }
}

export default Child;
