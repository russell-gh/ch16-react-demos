import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Simpsons from "./components/Simpsons";
import { get, store } from "./storage";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [searchTerm, setSearchTerm] = useState(
    get("searchTerm") ? get("searchTerm") : ""
  );

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    setSimpsons(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(simpsons);

  const onInput = (e) => {
    setSearchTerm(e.target.value);
    store("searchTerm", e.target.value);
  };

  if (!simpsons) return <p>Loading....</p>;

  //filter it around here
  let filtered = [...simpsons];
  filtered = filtered.filter((item) => {
    return item.character.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <input type="text" onInput={onInput} value={searchTerm} />
      <Simpsons simpsons={filtered} />
    </>
  );
};

export default App;
