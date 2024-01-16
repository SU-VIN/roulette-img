import { css } from "@emotion/css";
import { ButtonShape } from "../types/roulette";

export const RouletteStyle = (
  buttonShape: ButtonShape,
  arrowRotate: number
) => css`
  display: grid;
  place-items: center;
  position: relative;

  .roulette-wrapper {
    display: grid;
    margin: 60px 0px;
    transform: rotate(${arrowRotate}deg);

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
  }
  .start-button {
    width: ${buttonShape === "round" ? "60px" : "100px"};
    height: ${buttonShape === "round" ? "60px" : "30px"};
    position: ${buttonShape === "round" ? "absolute" : "none"};
    left: ${buttonShape === "round" ? "50%" : ""};
    top: ${buttonShape === "round" ? "50%" : ""};
    transform: ${buttonShape === "round" ? "translate(-50%, -50%)" : ""};
    border-radius: ${buttonShape === "round" ? "50%" : ""};
    border: ${buttonShape === "round" ? "none" : ""};
    margin: ${buttonShape === "round" ? "" : "0 auto"};

    margin-bottom: ${buttonShape === "round" ? "" : "20px"};
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #dedede;
      border: none;
    }
  }
`;
