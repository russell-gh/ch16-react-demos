import React, { Component } from "react";

class Name extends Component {
  render() {
    let start = this.props.highlight.nameStart;
    let strLength = this.props.highlight.strLength;
    let name = this.props.name;

    return (
      <>
        <b style={{width: 'fit-content', color: 'grey'}}>
          {start > 0 ? name.slice(0, start) : null}
          {start > -1 ? (
            <mark style={{ color: "blue" }}>{name.slice(start, start + strLength + 1)}</mark>
          ) : (
            <></>
          )}
          {start > -1 ? name.slice(start + strLength + 1, name.length) : name}
        </b>
      </>
    );
  }
}

export default Name;
