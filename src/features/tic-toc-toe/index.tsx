import React from 'react'
import Board from './board'
import ToolBar from './tool-bar'

export type IGameProps = {}

const Game: React.FC<IGameProps> = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ToolBar />
      <Board />
    </div>
  )
}

export default Game
