import { RouletteStyle } from "./styled";
import { Roulette as RouletteProps } from "../types/roulette";
import { Arrow } from "../types/roulette";
import { useState, useEffect, useRef } from "react";

const Roulette = ({
  imgUrl = "/assets/bg_circle-",
  arrowImgUrl = "/assets/arrow.png",
  chunkRange = { start: 2, end: 6 },
  chunk = chunkRange.start,
  arrowPosition = "up",
  winNumber,
  buttonText = "start",
  buttonShape = "round",
  buttonStyle,
  onWin,
}: RouletteProps) => {
  const [rouletteImg, setRouletteImg] = useState("");
  const [arrowRotate, setArrowRotate] = useState(0);
  const [isDeactive, setIsDeactive] = useState(false);
  const rouletteRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    createImgUrl();
    setArrowPosition();
  }, []);

  //룰렛 이미지 세팅
  const createImgUrl = () => {
    setRouletteImg(`${imgUrl}${chunk}.png`);
  };
  //룰렛 핀 위치 세팅
  const setArrowPosition = () => {
    const arrowPositionMap: { [key in Arrow]: number } = {
      up: 0,
      down: 180,
      left: 270,
      right: 90,
    };

    const rotate = arrowPositionMap[arrowPosition];
    setArrowRotate(rotate);
  };
  const startonClickHandler = () => {
    setWinNumber();
    setStopRoulettePosition();
  };

  //당첨번호 선택
  const setWinNumber = () => {
    if (winNumber == null) {
      winNumber = Math.floor(Math.random() * (chunk - 1 + 1)) + 1;
    }
    console.log(winNumber);
    onWin?.(winNumber);
  };

  //룰렛 정지 위치 지정
  const setStopRoulettePosition = () => {
    const min = (360 / chunk) * (winNumber! - 1) - 360 / chunk / 2;
    const max = (360 / chunk) * (winNumber! - 1) + 360 / chunk / 2;
    const deg = Math.floor(Math.random() * (max - min + 1)) + min + 3240;
    console.log(deg - 3240);

    spinRoulette(deg);
  };

  const spinRoulette = (deg: number) => {
    setIsDeactive(true);

    const onAnimationEnd = () => {
      if (rouletteRef.current) {
        alert(`축하합니다! ${winNumber}번 칸에 당첨되었습니다.`);
        rouletteRef.current.style.transition = "";
        rouletteRef.current.style.transform = "";
        setIsDeactive(false);
      }
    };

    if (rouletteRef.current) {
      rouletteRef.current.addEventListener("transitionend", onAnimationEnd, {
        once: true,
      });

      rouletteRef.current.style.transition = "transform 4s ease-in-out";
      rouletteRef.current.style.transform = `rotate(${-deg}deg)`;
    }
  };
  return (
    <div className={RouletteStyle(buttonShape, arrowRotate)}>
      <div className="roulette-wrapper">
        <img ref={rouletteRef} className="roulette" src={rouletteImg} />
        <img className="arrow" src={arrowImgUrl} />
      </div>
      {buttonStyle ? (
        <div onClick={startonClickHandler}>{buttonStyle}</div>
      ) : (
        <button
          className={"start-button"}
          onClick={startonClickHandler}
          disabled={isDeactive}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Roulette;
