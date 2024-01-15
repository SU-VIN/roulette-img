import { RouletteStyle } from "./styled";

const Roulette = () => {
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
