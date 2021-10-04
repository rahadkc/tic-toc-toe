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
  border-color: ${p => (p.isInWinner ? 'var(--success-color)' : 'var(--border-color)')};
  background: ${p => (p.isInWinner ? 'var(--success-color)' : 'var(--bg-square)')};
  height: var(--cell-size);

  border-color: #45454575;
  background: #1c1c1ba8;
  box-shadow: -4px -3px 45px 21px rgb(1 1 1 / 35%);
`

// polyline: #a77650
// circle #1e516a
export default React.memo(Square)
