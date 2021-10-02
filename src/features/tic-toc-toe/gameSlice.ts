import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface InitialState {}

const initialState: InitialState = {}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {}
})

export const actions = gameSlice.actions

export default gameSlice.reducer
