import React from "react";
import { useParams } from "react-router";
import simpsons from "../backup.json";

const Character = () => {
  const { name } = useParams();

  const character = simpsons.find((character) => {
    return character.character === name;
  });

  return (
    <>
      <p>{character.character}</p>
      <p>{character.quote}</p>
    </>
  );
};

export default Character;
