type chunkRange = {
  start: number;
  end: number;
};

export interface Roulette {
  chunkRange: chunkRange;
  chunk: number;
  arrowPosition: string;
  winNumber?: number;
}
