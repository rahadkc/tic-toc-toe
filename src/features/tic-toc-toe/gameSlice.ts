import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { GameStateLocalType, GameStatusType } from './types'
import { player1 } from './utils/constant'

export interface InitialState {
  status: GameStatusType
  game: GameStateLocalType
}

export const initialState: InitialState = {
  status: {
    draw: false,
    win: false,
    next: player1,
    winner: null
  },
  game: {
    squares: Array(9).fill(null),
    xIsNext: true
  }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: () => initialState,
    gameStatus: (state: InitialState, action: PayloadAction<GameStatusType>) => {
      state.status = action.payload
    },
    gameState: (state: InitialState, action: PayloadAction<GameStateLocalType>) => {
      state.game = action.payload
    }
  }
})

export const { resetGame, gameStatus, gameState } = gameSlice.actions

export const selectStatus = (state: RootState) => state.game.status
export const selectGameState = (state: RootState) => state.game.game

export default gameSlice.reducer
