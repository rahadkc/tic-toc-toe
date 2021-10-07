import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { usePrepareLocalValueToRender } from '../../hooks/usePrepareLocalValueToRender'
import { gameStatus, gameState, selectGameState } from './gameSlice'
import Square from './square'
import { SquareType } from './types'
import calculateWinner from './utils/calculateWinner'
import { player1, player2 } from './utils/constant'
import prepareStatus from './utils/prepareStatus'

export type IBoardProps = {}

const getNext = (xIsNext: boolean): string => (xIsNext ? player1 : player2)

const Board: React.FC<IBoardProps> = () => {
  const dispatch = useAppDispatch()
  const game = useAppSelector(selectGameState)
  const { squares, xIsNext } = game
  const winner = calculateWinner(squares)
  const squaresWithSvg = usePrepareLocalValueToRender(squares)

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    const newSquares = [...squares]

    newSquares[i] = xIsNext ? { value: player1, icon: player1 } : { value: player2, icon: player2 }

    dispatch(gameState({ squares: newSquares, xIsNext: !xIsNext }))
  }

  const renderSquares = useCallback(() => {
    return squaresWithSvg.map((square: SquareType, i: number) => {
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

  return <Grid>{renderSquares()}</Grid>
}

const Grid = styled.div`
  display: grid;
  grid-gap: var(--grid-gap);
  justify-content: center;
  grid-template-columns: var(--cell-size) var(--cell-size) var(--cell-size);
`

export default React.memo(Board)
