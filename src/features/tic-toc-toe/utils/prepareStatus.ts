import { SquareType, WinnerType } from '../types'

function prepareStatus({
  winner,
  squares,
  nextValue
}: {
  winner: WinnerType
  squares: SquareType[]
  nextValue: string
}): string {
  return winner
    ? `Hurrayyy!: ${winner.winner} won the game.`
    : squares.every(Boolean)
    ? 'Game is draw!'
    : `Next player: ${nextValue}`
}

export default prepareStatus
