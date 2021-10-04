import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectStatus } from './gameSlice'
import styled from 'styled-components'

export type IStatusProps = {}

const Status: React.FC<IStatusProps> = () => {
  const status = useAppSelector(selectStatus)
  return <GameStatus>{status}</GameStatus>
}

const GameStatus = styled.p`
  color: var(--theme-color);
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
  letter-spacing: 1px;
`
export default React.memo(Status)
