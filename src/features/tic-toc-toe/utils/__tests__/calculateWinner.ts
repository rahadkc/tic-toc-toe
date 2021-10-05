import { cleanup, render } from '@testing-library/react'
import calculateWinner from '../calculateWinner'
import { player1, player2 } from '../constant'
import { WinnerType } from '../../types'

const squares = [null, null, null]
const squaresWith = [null, { value: player1, icon: player1 }, null]
const squaresWithWinner = [
  { value: player1, icon: player1 },
  { value: player1, icon: player1 },
  { value: player1, icon: player1 },
  null,
  { value: player2, icon: player2 },
  { value: player2, icon: player2 }
]

describe('calculateWinner():', () => {
  afterEach(cleanup)

  test('Array of null params should return null', () => {
    const func: WinnerType = calculateWinner(squares)
    expect(func).toBeNull()
  })

  test('Array of null and Value params should return null', () => {
    const func: WinnerType = calculateWinner(squaresWith)
    expect(func).toBeNull()
  })

  test('Array with a winning combo should return a winner', () => {
    const func: WinnerType = calculateWinner(squaresWithWinner)
    expect(func).not.toBeNull()
  })
})
