/// <reference types="react" />
type ChunkRange = {
    start: number;
    end: number;
};
export type StartPosition = "center" | "corner";
export type winNumberOption = "async" | undefined;
export type ButtonShape = "round" | "squre";
export type Arrow = "up" | "down" | "left" | "right";
export interface Roulette {
    imgUrl: string;
    arrowImgUrl: string;
    chunkRange: ChunkRange;
    startPosition: StartPosition;
    chunk?: number;
    arrowPosition?: Arrow;
    winNumber?: number | null;
    drivingType?: winNumberOption;
    buttonText?: string;
    buttonShape?: ButtonShape;
    buttonStyle?: React.ReactNode;
    onWin?: (winNumber: number | null) => void;
}
export {};
