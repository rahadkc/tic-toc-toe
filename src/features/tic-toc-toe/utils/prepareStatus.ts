import { SquareLocalType, SquareType, WinnerType } from '../types'

export interface GamestatusType {
  draw: boolean
  win: boolean
  next: string
  winner: WinnerType
}

function prepareStatus({
  winner,
  squares,
  nextValue
}: {
  winner: WinnerType
  squares: (SquareType | SquareLocalType)[]
  nextValue: string
}): GamestatusType {
  const draw = !winner && squares.every(Boolean)
  const win = Boolean(winner)
  const next = nextValue
  return { draw, win, next, winner }
  // return winner
  //   ? `Hurrayyy!: ${winner?.winner} won the game.`
  //   : squares.every(Boolean)
  //   ? 'Game is draw!'
  //   : `Next player: ${nextValue}`
}

export default prepareStatus
