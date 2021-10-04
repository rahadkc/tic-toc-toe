import React, { useState, useCallback, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Circle from '../../component/circle'
import Cross from '../../component/cross'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { usePrepareLocalValueToRender } from '../../hooks/usePrepareLocalValueToRender'
import { gameStatus, resetGame, selectReset } from './gameSlice'
import Square from './square'
import { GameStateLocalType, GameStateType, SquareType } from './types'
import calculateWinner from './utils/calculateWinner'
import { player1, player2 } from './utils/constant'
import prepareStatus from './utils/prepareStatus'

export type IBoardProps = {}

const initialState: GameStateType = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const getNext = (xIsNext: boolean): string => (xIsNext ? player1 : player2)

const Board: React.FC<IBoardProps> = () => {
  const dispatch = useAppDispatch()
  const reset = useAppSelector(selectReset)
  const [localValues, setLocalValues] = useLocalStorage('game', initialState)
  const prepareLocalValueToRender = usePrepareLocalValueToRender(localValues)
  const [gameState, setGameState] = useState(prepareLocalValueToRender)
  const { squares, xIsNext } = gameState
  const winner = calculateWinner(squares)
  console.log('reset :>> ', reset)

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    setGameState((prevState: GameStateType) => {
      const { squares, xIsNext } = prevState
      const newSquares = [...squares]

      newSquares[i] = xIsNext
        ? { value: player1, icon: <Cross /> }
        : { value: player2, icon: <Circle /> }

      return {
        squares: newSquares,
        xIsNext: !xIsNext
      }
    })

    setLocalValues((prevState: GameStateLocalType) => {
      const { squares, xIsNext } = prevState
      const newSquares = [...squares]
      newSquares[i] = xIsNext
        ? { value: player1, icon: player1 }
        : { value: player2, icon: player2 }

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

  const handleReset = () => {
    setGameState(initialState)
    setLocalValues(initialState)
    dispatch(resetGame())
  }

  useEffect(() => {
    const status = prepareStatus({ winner, squares, nextValue: getNext(xIsNext) })
    dispatch(gameStatus(status))
  }, [winner, squares, xIsNext])

  useEffect(() => {
    if (reset) handleReset()
  }, [reset])

  return <Grid>{renderSquares()}</Grid>
}

const Grid = styled.div`
  display: grid;
  grid-gap: var(--grid-gap);
  justify-content: center;
  grid-template-columns: var(--cell-size) var(--cell-size) var(--cell-size);
`

export default Board
