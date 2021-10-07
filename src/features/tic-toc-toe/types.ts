export type SquareType = null | { value: string; icon: JSX.Element }

export type SquareLocalType = null | { value: string; icon: string }

export interface GameStateLocalType {
  squares: SquareLocalType[]
  xIsNext: boolean
}

export type WinnerType = null | { winner: string; line: number[] }

export enum Player {
  'X',
  'O'
}

export interface GameStatusType {
  draw: boolean
  win: boolean
  next: string
  winner: WinnerType
}
