import React from "react";
import "./App.css";
import { Roulette } from "./lib";

function App() {
  return (
    <div className="App">
      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
      ></Roulette>
    </div>
  );
}

export default App;
