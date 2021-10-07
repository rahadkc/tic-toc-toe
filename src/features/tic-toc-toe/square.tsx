import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../app/hooks'
import { gameStatus, selectStatus } from './gameSlice'

export type ISquareProps = {
  value: string | null | JSX.Element
  onClick: () => void
  isInWinner?: boolean
}

const Square: React.FC<ISquareProps> = ({ value, onClick, isInWinner }) => {
  const { draw } = useAppSelector(selectStatus)

  return (
    <Button draw={draw} isInWinner={isInWinner} onClick={onClick}>
      {value}
    </Button>
  )
}

interface Props {
  isInWinner: boolean | undefined
  draw?: boolean
}

const Button = styled.button<Props>`
  box-shadow: none;
  border-width: 2px;
  border-style: solid;
  border-color: ${p =>
    p.isInWinner
      ? 'var(--success-border-color)'
      : p.draw
      ? 'var(--warning)'
      : 'var(--border-color)'};
  background: ${p =>
    p.isInWinner ? 'var(--success-color)' : p.draw ? 'var(--warning)' : 'var(--secondary-color)'};
  height: var(--cell-size);
  box-shadow: -4px -3px 45px 21px rgb(1 1 1 / 35%);
`

export default React.memo(Square)
