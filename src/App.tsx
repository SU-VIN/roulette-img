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
    // alert(`당첨번호는 ${winNumber}`);
    <img
      src={"/assets/arrow.png"}
      style={{ position: "absolute", zIndex: 20 }}
    ></img>;
  };
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "center", gap: "50px" }}
    >
      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        startPosition="center"
        winNumber={2}
        chunk={2}
        arrowPosition="up"
        buttonShape="round"
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        startPosition="center"
        winNumber={2}
        chunk={3}
        arrowPosition="left"
        buttonShape="squre"
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        startPosition="center"
        winNumber={2}
        chunk={4}
        arrowPosition="down"
        buttonStyle={
          <div
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "5px",
              display: "grid",
              placeItems: "center",
            }}
          >
            custom button
          </div>
        }
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        startPosition="center"
        winNumber={2}
        chunk={5}
        arrowPosition="right"
        buttonShape="round"
        buttonText="button text custom"
      ></Roulette>

      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        startPosition="center"
        chunk={6}
        arrowPosition="up"
      ></Roulette>
    </div>
  );
}

export default App;
