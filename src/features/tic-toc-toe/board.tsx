import React, { useState } from 'react'
import styled from 'styled-components'
import Circle from '../../component/circle'
import Cross from '../../component/cross'
import Square from './square'
import { GameStateType, SquareType } from './types'
import calculateWinner from './utils/calculateWinner'

export type IBoardProps = {}

const initialState: GameStateType = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const Board: React.FC<IBoardProps> = () => {
  const [gameState, setGameState] = useState(initialState)
  const { squares } = gameState

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    setGameState((prevState: GameStateType) => {
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
    return squares.map((square: SquareType, i: number) => {
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
