import { cleanup } from '@testing-library/react'
import { store } from '../../../app/store'
import { gameStatus, resetGame } from '../gameSlice'
import { player1, player2 } from '../utils/constant'
import prepareStatus from '../utils/prepareStatus'

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

describe('REDUX Actions', () => {
  afterEach(cleanup)

  test('Reset: should toggle the reset value', () => {
    const defaultReset = store.getState().game.reset
    expect(defaultReset).toBeFalsy()

    store.dispatch(resetGame())
    const changedReset = store.getState().game.reset
    expect(changedReset).toBeTruthy()

    store.dispatch(resetGame())
    const changedResetAgain = store.getState().game.reset
    expect(changedResetAgain).toBeFalsy()
  })

  test('Status: default status have no value', () => {
    const defaultStatus = store.getState().game.status
    expect(defaultStatus).toHaveLength(0)
  })

  test('Status: winner=null, squares=null[] and nextValue return with nextValue', () => {
    const value = new RegExp(nextValue, 'g')
    const getStatus = prepareStatus({ winner, squares, nextValue })
    store.dispatch(gameStatus(getStatus))
    const status = store.getState().game.status
    expect(status).toMatch(value)
  })

  test('Status: winner=null, squares=value[] and nextValue return with "Draw"', () => {
    const value = new RegExp('draw', 'g')
    const getStatus = prepareStatus({
      winner: null,
      squares: squaresWithValue,
      nextValue
    })

    store.dispatch(gameStatus(getStatus))
    const status = store.getState().game.status
    expect(status).toMatch(value)
  })

  test('Status: has winner, squares with winning combo and nextValue return winning text', () => {
    const winner = 'THANOS'
    const value = new RegExp(winner, 'g')
    const getStatus = prepareStatus({
      winner: { winner: winner, line: [0, 1, 2] },
      squares: squaresWithWinner,
      nextValue
    })

    store.dispatch(gameStatus(getStatus))
    const status = store.getState().game.status
    expect(status).toMatch(value)
  })
})
