import React, { useEffect, useState } from "react";
import "./App.css";
import { Roulette } from "./lib";

function App() {
  const [winNumber, setWinNumber] = useState(0);

  const getWinNumber = (number: number) => {
    setWinNumber(number);
  };

  return (
    <div className="App">
      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        buttonStyle={
          <>
            <button>hello</button>
          </>
        }
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        chunk={4}
        arrowPosition="left"
        buttonShape="squre"
        onWin={getWinNumber}
      ></Roulette>
    </div>
  );
}

export default App;
