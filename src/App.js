import React, { Component } from "react";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <>
        <News news="CH16 is great" />
        <News news="CH16 is learning React" />
      </>
    );
  }
}

export default App;
