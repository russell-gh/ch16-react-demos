import React, { Component } from "react";

class App extends Component {
  onBtnClick = () => {
    console.log("Btn clicked");
  };

  onTextInput = (e) => {
    console.log("User typed: ", e);
  };

  render() {
    return (
      <>
        <button onClick={this.onBtnClick}>Click Me</button>
        <input type="text" onInput={this.onTextInput} />
      </>
    );
  }
}

export default App;
