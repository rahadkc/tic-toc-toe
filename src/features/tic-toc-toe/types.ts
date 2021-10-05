export type SquareType = { value: string; icon: JSX.Element }

export interface GameStateType {
  squares: SquareType[]
  xIsNext: boolean
}

export type SquareLocalType = { value: string; icon: string }

export interface GameStateLocalType {
  squares: SquareLocalType[]
  xIsNext: boolean
}

export type WinnerType = { winner: string; line: number[] }

export enum Player {
  'X',
  'O'
}
