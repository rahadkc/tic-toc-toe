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

  const handleClick = (i: number) => {
    setGameState((prevState: GameState) => {
      const { squares, xIsNext } = prevState
      const newSquares = [...squares]

      newSquares[i] = xIsNext ? { value: 'X', icon: <Cross /> } : { value: 'O', icon: <Circle /> }

      return {
        squares: newSquares,
        xIsNext: !xIsNext
      }
    })
  }

  const renderSquares = () => {
    return squares.map((square: any, i: number) => {
      return (
        <Square
          key={i}
          value={square === null ? square : square.icon}
          onClick={() => handleClick(i)}
        />
      )
    })
  }

  return <Grid>{renderSquares()}</Grid>
}

const Grid = styled.div`
  display: grid;
  grid-gap: var(--grid-gap);
  justify-content: center;
  grid-template-columns: var(--cell-size) var(--cell-size) var(--cell-size);
`

export default Board
