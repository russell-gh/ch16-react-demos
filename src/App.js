import React, { Component } from "react";
import styles from "./App.module.css";
import Child from "./components/Child";

class App extends Component {
  state = { done: true };

  render() {
    return (
      <div className={styles.done}>
        <p>Hello World</p>
        <Child />
        <button
          onClick={() => {
            this.setState({ done: !this.state.done });
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
