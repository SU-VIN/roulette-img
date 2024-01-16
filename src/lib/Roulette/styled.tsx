import { css } from "@emotion/css";
import { buttonShape } from "../types/roulette";

export const RouletteStyle = (buttonShape: buttonShape) => css`
  display: grid;
  place-items: center;

  .roulette-wrapper {
    display: grid;

    position: ${buttonShape == "round" ? "relative" : ""};
    margin: 60px 0px;

    .roulette {
      position: relative;
      width: 400px;
    }

    .arrow {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      width: 30px;
    }
    .start-button {
      width: ${buttonShape == "round" ? "60px" : "100px"};
      height: ${buttonShape == "round" ? "60px" : "30px"};
      position: ${buttonShape == "round" ? "absolute" : "none"};
      left: ${buttonShape == "round" ? "50%" : ""};
      top: ${buttonShape == "round" ? "50%" : ""};
      transform: ${buttonShape == "round" ? "translate(-50%, -50%)" : ""};
      border-radius: ${buttonShape == "round" ? "50%" : ""};
      border: ${buttonShape == "round" ? "none" : ""};
      margin: ${buttonShape == "round" ? "" : "0 auto"};
      margin-top: ${buttonShape == "round" ? "" : "30px"};
      text-align: center;
      cursor: pointer;
    }
  }
`;
