import React from "react";

const Input = (props) => {
  //in functional, need to write props in function params
  const { name, type, onUserInput, error, options } = props;

  if (options) {
    return (
      <>
        <label for={name}>{name}</label>
        <select>
          {options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </>
    );
  }

  return (
    <div onInput={onUserInput}>
      <label for={name}>{name}</label>
      <input type={type ? type : "text"} id={name} name={name} />
      <p>{error}</p>
    </div>
  );
};

export default Input;
