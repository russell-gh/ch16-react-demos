import React, { Component } from "react";

class Quote extends Component {
  render() {
    let start = this.props.highlight.quoteStart;
    let strLength = this.props.highlight.strLength;
    let quote = `"${this.props.quote}"`;

    return (
      <>
        <div style={{width: 'fit-content'}}>
          {start > 0 ? quote.slice(0, start) : null}
          {start > -1 ? (
            <mark style={{ color: "red" }}>
              {quote.slice(start, start + strLength + 1)}
            </mark>
          ) : (
            <></>
          )}
          {start > -1
            ? quote.slice(start + strLength + 1, quote.length)
            : quote}
        </div>
      </>
    );
  }
}

export default Quote;
