import { SquareType } from '../types'

function prepareStatus({
  winner,
  squares,
  nextValue
}: {
  winner: null | { winner: string; line: number[] }
  squares: SquareType[]
  nextValue: string
}): string {
  return winner
    ? `Hurrayyy!: ${winner.winner} is winner.`
    : squares.every(Boolean)
    ? 'Game is draw!'
    : `Next player: ${nextValue}`
}

export default prepareStatus
