import React from "react";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
