type chunkRange = {
  start: number;
  end: number;
};

export type buttonShape = "round" | "squre";

export interface Roulette {
  imgUrl: string;
  arrowImgUrl: string;
  chunkRange: chunkRange;
  chunk?: number;
  arrowPosition?: string;
  winNumber?: number;
  buttonText?: string;
  buttonShape?: buttonShape;
}
