type ChunkRange = {
  start: number;
  end: number;
};

export type ButtonShape = "round" | "squre";

export type Arrow = "up" | "down" | "left" | "right";

export interface Roulette {
  imgUrl: string;
  arrowImgUrl: string;
  chunkRange: ChunkRange;
  chunk?: number;
  arrowPosition?: Arrow;
  winNumber?: number;
  buttonText?: string;
  buttonShape?: ButtonShape;
  onWin?: (winNumber: number) => void;
}
