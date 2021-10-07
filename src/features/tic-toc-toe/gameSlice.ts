import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { GameStatusType } from './types'
import { player1 } from './utils/constant'

export interface InitialState {
  reset: boolean
  status: GameStatusType
}

const initialState: InitialState = {
  reset: false,
  status: {
    draw: false,
    win: false,
    next: player1,
    winner: null
  }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state: InitialState) => {
      state.reset = !state.reset
    },
    gameStatus: (state: InitialState, action: PayloadAction<GameStatusType>) => {
      state.status = action.payload
    }
  }
})

export const { resetGame, gameStatus } = gameSlice.actions

export const selectReset = (state: RootState) => state.game.reset
export const selectStatus = (state: RootState) => state.game.status

export default gameSlice.reducer
