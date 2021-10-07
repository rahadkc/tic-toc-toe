import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectStatus } from './gameSlice'
import styled, { keyframes } from 'styled-components'

export type IStatusProps = {}

const Status: React.FC<IStatusProps> = () => {
  const { draw, win, next, winner } = useAppSelector(selectStatus)

  const winnerContent = win ? (
    <GameWin>
      Hurrayyy!: <Trophy>&#x1F3C6;</Trophy> "{winner?.winner}" won the game.
    </GameWin>
  ) : (
    <></>
  )
  const nextPlayerContent = !win && !draw ? <GameOn>Next player: {next}</GameOn> : <></>
  const drawContent = draw ? <GameDraw>Game is draw!</GameDraw> : <></>

  return (
    <GameStatus>
      {winnerContent}
      {nextPlayerContent}
      {drawContent}
    </GameStatus>
  )
}

const GameStatus = styled.div`
  color: var(--theme-color);
  font-size: 1.475rem;
  font-weight: bold;
  margin-top: 3rem;
  letter-spacing: 1px;
`
const Rotate = keyframes`
  0% {
    transform: rotateY(0deg)
  }

  40%, 60% {
    transform: rotateY(180deg)
  }

  100% {
    transform: rotateY(360deg)
  }
`

const GameWin = styled.p`
  color: var(--success-light);
`
const GameOn = styled.p``
const GameDraw = styled.p`
  color: var(--light);
`

const Trophy = styled.span`
  display: inline-block;
  width: 40px;
  font-size: 40px;
  animation: ${Rotate} 2s linear forwards infinite;
`
export default React.memo(Status)
