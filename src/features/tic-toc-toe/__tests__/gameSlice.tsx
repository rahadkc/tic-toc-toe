import { cleanup } from '@testing-library/react'
import { store } from '../../../app/store'
import { gameState, gameStatus, initialState, resetGame } from '../gameSlice'
import { GameStatusType } from '../types'
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
const winPlayer = 'THANOS'

const mockGameState = {
  squares: squaresWithWinner,
  xIsNext: true
}

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

describe('REDUX Actions', () => {
  afterEach(cleanup)

  test('resetGame: should reset REDUX state to the initialState', () => {
    store.dispatch(gameState({ ...mockGameState }))
    const gameStateWithValue = store.getState().game.game
    expect(gameStateWithValue).toEqual(mockGameState)

    store.dispatch(resetGame())
    const { _persist, ...rest } = store.getState()
    expect(rest.game.game).not.toEqual(mockGameState)
    expect(rest.game).toEqual(initialState)
  })

  test('Status-default: should return default status state', () => {
    const defaultStatus = store.getState().game.status
    expect(defaultStatus).toEqual(defaultStatus)
  })

  test('Status-default-dspatch: winner=null, squares=null[] and nextValue return with default status', () => {
    const getStatus = prepareStatus({ winner, squares, nextValue })
    store.dispatch(gameStatus(getStatus))
    const status = store.getState().game.status
    expect(status).toEqual(defaultStatus)
  })

  test('Status-draw: winner=null, squares=value[] and nextValue return with "Draw"', () => {
    const getStatus = prepareStatus({
      winner: null,
      squares: squaresWithValue,
      nextValue
    })

    store.dispatch(gameStatus(getStatus))
    const status = store.getState().game.status
    expect(status).toEqual(drawStatus)
  })

  test('Status: has winner, squares with winning combo and nextValue return winning text', () => {
    const getStatus = prepareStatus({
      winner: { winner: winPlayer, line: [0, 1, 2] },
      squares: squaresWithWinner,
      nextValue
    })

    store.dispatch(gameStatus(getStatus))
    const status = store.getState().game.status
    expect(status).toEqual(winStatus)
  })
})
