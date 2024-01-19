import React, { useState } from "react";
import "./App.css";
import { Roulette } from "./lib";

function App() {
  const [winNumber, setWinNumber] = useState<number | null>(null);

  const clickButton = () => {
    setTimeout(() => {
      setWinNumber(2);
    }, 3000);
  };

  return (
    <div className="App">
      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        winNumber={{ number: winNumber, option: "async" }}
        buttonStyle={
          <>
            <button onClick={clickButton}>hello</button>
          </>
        }
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        chunk={4}
        winNumber={{ number: 2 }}
        arrowPosition="left"
        buttonShape="squre"
      ></Roulette>
    </div>
  );
}

export default App;
