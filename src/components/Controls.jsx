import React, { Component } from "react";
class Controls extends Component {
  render() {
    let { index, toggleLikeDelete, liked, deleted } = this.props;
    return (
      <>
        {deleted ? (
          null
        ) : (
          <button
            onClick={() => {
              toggleLikeDelete(index, "liked");
            }}
          >
            {liked ? "Unlike" : "Like"}
          </button>
        )}
        <button
          onClick={() => {
            toggleLikeDelete(index, "deleted");
          }}
        >
          {deleted ? "Restore" : "Delete"}
        </button>
      </>
    );
  }
}

export default Controls;
