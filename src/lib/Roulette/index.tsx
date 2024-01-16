import { RouletteStyle } from "./styled";
import { Roulette as RouletteProps } from "../types/roulette";
import { useState, useEffect } from "react";
const Roulette = ({
  imgUrl, //picture-1
  arrowImgUrl,
  chunkRange,
  chunk = chunkRange.start,
  arrowPosition = "up",
  winNumber,
  buttonText = "start",
  buttonShape = "round",
}: RouletteProps) => {
  const [rouletteImg, setRouletteImg] = useState("");

  useEffect(() => {
    const createImgUrl = () => {
      const url = imgUrl + chunk + ".png";
      setRouletteImg(url);
    };
    createImgUrl();
  }, []);

  return (
    <div className={RouletteStyle(buttonShape!)}>
      <div className="roulette-wrapper">
        <img className="roulette" src={rouletteImg} />
        <img className="arrow" src={arrowImgUrl} />
      </div>
      <button className={"start-button"}>{buttonText}</button>
    </div>
  );
};

export default Roulette;
