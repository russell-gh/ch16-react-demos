import React from "react";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalCardNumber, setOriginalCardNumber] = useState("");

  const onInput = (e) => {
    setSearchTerm(
      "*".repeat(originalCardNumber.length - 1) +
        originalCardNumber[originalCardNumber.length - 1]
    );
  };

  const onKeyDown = (e) => {
    //if backspace then remove final char

    setOriginalCardNumber(originalCardNumber + e.key);
  };

  console.log(searchTerm);
  return (
    <>
      <input
        type="text"
        onInput={onInput}
        onKeyDown={onKeyDown}
        value={searchTerm}
      />
    </>
  );
};

export default App;
