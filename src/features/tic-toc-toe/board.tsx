import React, { useState } from 'react'
import styled from 'styled-components'
import Circle from '../../component/circle'
import Cross from '../../component/cross'
import Square from './square'

export type IBoardProps = {}

export interface GameState {
  squares: (null | string | { value: string; icon: JSX.Element | string })[]
  xIsNext: boolean
}

const initialState: GameState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const Board: React.FC<IBoardProps> = () => {
  const [gameState, setGameState] = useState(initialState)
  const { squares } = gameState

  const handleClick = () => {
    console.log('clicked')
  }

  const renderSquares = () => {
    return squares.map((_square: any, i: number) => {
      return <Square key={i} value={_square} onClick={handleClick} />
    })
  }

  return (
    <Grid>
      <div style={{ background: 'red' }}>
        <Circle />
        <Cross />
      </div>
      {renderSquares()}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-gap: var(--grid-gap);
  justify-content: center;
  grid-template-columns: var(--cell-size) var(--cell-size) var(--cell-size);
`

export default Board
