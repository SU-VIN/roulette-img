type chunkRange = {
  start: number;
  end: number;
};

export interface Roulette {
  imgUrl: string;
  chunkRange: chunkRange;
  chunk?: number;
  arrowPosition?: string;
  winNumber?: number;
}
