export type SquareType = null | { value: string; icon: JSX.Element }

export interface GameStateType {
  squares: SquareType[]
  xIsNext: boolean
}

export type SquareTypeLocal = null | { value: string; icon: string }

export interface GameStateLocalType {
  squares: SquareTypeLocal[]
  xIsNext: boolean
}
