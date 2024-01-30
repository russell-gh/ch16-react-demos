import React, { Component } from "react";
import styles from "../Child.module.css";

class Child extends Component {
  state = {};
  render() {
    return (
      <>
        <p className={styles.done}></p>
      </>
    );
  }
}

export default Child;
