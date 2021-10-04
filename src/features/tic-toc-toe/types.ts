export type SquareType = null | { value: string; icon: JSX.Element }

export interface GameStateType {
  squares: SquareType[]
  xIsNext: boolean
}

export type SquareLocalType = null | { value: string; icon: string }

export interface GameStateLocalType {
  squares: SquareLocalType[]
  xIsNext: boolean
}

export enum Player {
  'X',
  'O'
}
