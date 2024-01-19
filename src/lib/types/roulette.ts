type ChunkRange = {
  start: number;
  end: number;
};
type winNumber = {
  number: number | null;
  option?: winNumberOption;
};

export type winNumberOption = "async" | "none";

export type ButtonShape = "round" | "squre";

export type Arrow = "up" | "down" | "left" | "right";

export interface Roulette {
  imgUrl: string;
  arrowImgUrl: string;
  chunkRange: ChunkRange;
  chunk?: number;
  arrowPosition?: Arrow;
  winNumber?: winNumber;
  buttonText?: string;
  buttonShape?: ButtonShape;
  buttonStyle?: React.ReactNode;
  onWin?: (winNumber: number | null) => void;
}
