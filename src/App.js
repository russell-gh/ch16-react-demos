import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState();
  const [location] = useState("London");
  console.log("Component re rendered");

  const getWeather = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},UK&appid=37b29f091f8754cf8600dea56dee3863`
    );
    console.log(data);
    setWeather(data);
  }, [location]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  console.log(weather);

  if (!weather) return <p>Loading....</p>;

  return (
    <>
      <p>{Math.round(weather.main.temp - 273.15)}</p>
    </>
  );
};

export default App;
