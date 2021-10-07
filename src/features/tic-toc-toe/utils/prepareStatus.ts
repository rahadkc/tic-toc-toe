import { GameStatusType, SquareLocalType, SquareType, WinnerType } from '../types'

function prepareStatus({
  winner,
  squares,
  nextValue
}: {
  winner: WinnerType
  squares: (SquareType | SquareLocalType)[]
  nextValue: string
}): GameStatusType {
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
