import React, { useState, useCallback, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../app/hooks'
import Circle from '../../component/circle'
import Cross from '../../component/cross'
import { gameStatus } from './gameSlice'
import Square from './square'
import { GameStateType, SquareType } from './types'
import calculateWinner from './utils/calculateWinner'
import prepareStatus from './utils/prepareStatus'

export type IBoardProps = {}

const initialState: GameStateType = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const getNext = (xIsNext: boolean): string => (xIsNext ? 'X' : 'O')

const Board: React.FC<IBoardProps> = () => {
  const dispatch = useAppDispatch()
  const [gameState, setGameState] = useState(initialState)
  const { squares, xIsNext } = gameState
  const winner = calculateWinner(squares)

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

  const renderSquares = useCallback(() => {
    return squares.map((square: SquareType, i: number) => {
      return (
        <Square
          key={i}
          isInWinner={winner ? winner.line.includes(i) : false}
          value={square === null ? square : square.icon}
          onClick={() => handleClick(i)}
        />
      )
    })
  }, [squares])

  useEffect(() => {
    const status = prepareStatus({ winner, squares, nextValue: getNext(xIsNext) })
    dispatch(gameStatus(status))
  }, [winner, squares, xIsNext])

  //   console.log('gameStatus :>> ', gameStatus)

  return (
    <div>
      <Grid>{renderSquares()}</Grid>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-gap: var(--grid-gap);
  justify-content: center;
  grid-template-columns: var(--cell-size) var(--cell-size) var(--cell-size);
`

export default Board
