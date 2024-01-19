import React, { useState } from "react";
import "./App.css";
import { Roulette } from "./lib";

function App() {
  const [winNumber, setWinNumber] = useState<number | null>(null);

  const clickButton = () => {
    setWinNumber(null);

    setTimeout(() => {
      setWinNumber(2);
      console.log(winNumber);
      console.log("start");
    }, 3000);
  };

  return (
    <div className="App">
      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        winNumber={winNumber}
        drivingType="async"
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
        winNumber={2}
        chunk={4}
        arrowPosition="left"
        buttonShape="squre"
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        chunk={6}
        arrowPosition="right"
      ></Roulette>
    </div>
  );
}

export default App;
