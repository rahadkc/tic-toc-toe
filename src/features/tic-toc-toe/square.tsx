import React from 'react'
import styled from 'styled-components'

export type ISquareProps = {
  value: string | null | JSX.Element
  onClick: () => void
  isInWinner?: boolean
}

const Square: React.FC<ISquareProps> = ({ value, onClick, isInWinner }) => {
  return (
    <Button isInWinner={isInWinner} onClick={onClick}>
      {value}
    </Button>
  )
}

interface Props {
  isInWinner: boolean | undefined
}

const Button = styled.button<Props>`
  box-shadow: none;
  border-width: 2px;
  border-style: solid;
  border-color: ${p => (p.isInWinner ? 'var(--success-color)' : 'var(--theme-color)')};
  background: ${p => (p.isInWinner ? 'var(--success-color)' : 'var(--theme-color)')};
  height: var(--cell-size);
`

export default React.memo(Square)
