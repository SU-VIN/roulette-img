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

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        chunk={4}
        arrowPosition="left"
        buttonShape="squre"
      ></Roulette>
    </div>
  );
}

export default App;
