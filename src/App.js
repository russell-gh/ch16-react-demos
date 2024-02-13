// import React from "react";

// const App = () => {
//   const onClick = () => {
//     more();
//   };

//   const more = () => {
//     console.log("Click");
//   };

//   return <button onClick={onClick}>Click me</button>;
// };

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [simpsons, setSimpsons] = useState();

  const getApiData = async () => {
    const { data } =
      await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=50
    `);
    setSimpsons(data);
  };

  useEffect(
    () => {
      getApiData();
    },
    [] //means run once
  );

  return (
    <>
      {simpsons &&
        simpsons.map((char) => {
          return <p>{char.quote}</p>;
        })}
    </>
  );
};

export default App;
