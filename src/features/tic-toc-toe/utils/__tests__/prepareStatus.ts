import { cleanup, render } from '@testing-library/react'
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

describe('prepareStatus()', () => {
  afterEach(cleanup)

  test('winner: null, squares: null[] and nextValue return nextValue', () => {
    const func = prepareStatus({ winner, squares, nextValue })
    expect(func).toMatch(/Z/)
  })

  test('winner: null, all squares with a value and nextValue return Draw!', () => {
    const func = prepareStatus({
      winner: null,
      squares: squaresWithValue,
      nextValue
    })
    expect(func.length).toBeGreaterThan(0)
  })

  test('has winner, squares with winning combo and nextValue return winning text', () => {
    const func = prepareStatus({
      winner: { winner: 'Y', line: [0, 1, 2] },
      squares: squaresWithWinner,
      nextValue
    })
    expect(func).toMatch(/Y/)
  })
})
