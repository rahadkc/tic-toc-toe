import { cleanup, render } from '@testing-library/react'
import { GameStatusType } from '../../types'
import { player1, player2 } from '../constant'
import prepareStatus from '../prepareStatus'

const squarePlayer1 = { value: player1, icon: player1 }
const squarePlayer2 = { value: player2, icon: player2 }
const squares = [null, null, null]
const squaresWithValue = [squarePlayer1, squarePlayer1, squarePlayer1]
const squaresWithWinner = [
  squarePlayer1,
  squarePlayer1,
  squarePlayer1,
  null,
  squarePlayer2,
  squarePlayer2
]

const winner = null
const nextValue = 'Z'
const winPlayer = 'Y'

const defaultStatus: GameStatusType = { draw: false, win: false, next: nextValue, winner: null }
const drawStatus: GameStatusType = {
  draw: true,
  win: false,
  next: nextValue,
  winner: null
}
const winStatus: GameStatusType = {
  draw: false,
  win: true,
  next: nextValue,
  winner: { winner: winPlayer, line: [0, 1, 2] }
}

describe('prepareStatus()', () => {
  afterEach(cleanup)

  test('winner: null, chickn squares: null[] and nextValue return nextValue', () => {
    const status = prepareStatus({ winner, squares, nextValue })
    expect(status).toEqual(defaultStatus)
  })

  test('winner: null, all squares with a value and nextValue return Draw!', () => {
    const status = prepareStatus({
      winner: null,
      squares: squaresWithValue,
      nextValue
    })
    expect(status).toEqual(drawStatus)
  })

  test('has winner, squares with winning combo and nextValue return winning text', () => {
    const status = prepareStatus({
      winner: { winner: winPlayer, line: [0, 1, 2] },
      squares: squaresWithWinner,
      nextValue
    })
    expect(status).toEqual(winStatus)
  })
})
