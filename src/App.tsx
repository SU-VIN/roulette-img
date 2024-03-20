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
    }, 1000);
  };

  const rouletteEnd = () => {
    alert(`당첨번호는 ${winNumber}`);
  };
  return (
    <div className="App">
      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        startPosition="center"
        winNumber={2}
        chunk={4}
        arrowPosition="left"
        buttonShape="squre"
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        startPosition="center"
        chunk={6}
        arrowPosition="right"
      ></Roulette>

      <Roulette
        imgUrl="/assets/Aroultte-"
        arrowImgUrl="/assets/Aarrow.png"
        chunkRange={{ start: 4, end: 4 }}
        startPosition="corner"
        winNumber={winNumber}
        drivingType="async"
        buttonStyle={
          <>
            <img
              src="/assets/Abutton.png"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120px",
                cursor: "pointer",
              }}
              onClick={clickButton}
            ></img>
          </>
        }
        endRoulette={rouletteEnd}
      ></Roulette>
    </div>
  );
}

export default App;
