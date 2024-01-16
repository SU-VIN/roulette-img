import { RouletteStyle } from "./styled";
import { Roulette as RouletteProps } from "../types/roulette";
const Roulette = ({
  imgUrl,
  chunkRange,
  chunk,
  arrowPosition,
  winNumber,
}: RouletteProps) => {
  return (
    <div className={RouletteStyle}>
      <div className="roulette-wrapper">
        <img className="roulette" />
        <img className="arrow" />
      </div>
      <div className="button-wrapper">
        <button className="start-button"></button>
      </div>
    </div>
  );
};

export default Roulette;
