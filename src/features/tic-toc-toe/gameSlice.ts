import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface InitialState {
  reset: boolean
}

const initialState: InitialState = {
  reset: false
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state: InitialState) => {
      state.reset = !state.reset
    }
  }
})

export const { resetGame } = gameSlice.actions

export const selectReset = (state: RootState) => state.game.reset

export default gameSlice.reducer
