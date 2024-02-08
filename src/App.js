import React from "react";
import { Route, Routes } from "react-router";
import Character from "./components/Character";

const App = () => {
  return (
    <Routes>
      <Route path="/:name" element={<Character />} />
    </Routes>
  );
};

export default App;
