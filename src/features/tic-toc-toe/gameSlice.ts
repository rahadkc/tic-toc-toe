import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface InitialState {
  reset: boolean
  status: string
}

const initialState: InitialState = {
  reset: false,
  status: ''
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state: InitialState) => {
      state.reset = !state.reset
    },
    gameStatus: (state: InitialState, action: PayloadAction<string>) => {
      state.status = action.payload
    }
  }
})

export const { resetGame, gameStatus } = gameSlice.actions

export const selectReset = (state: RootState) => state.game.reset
export const selectStatus = (state: RootState) => state.game.status

export default gameSlice.reducer
