import React from 'react'
import styled from 'styled-components'

export type ISquareProps = {
  value: string | null
  onClick: () => void
}

const Square: React.FC<ISquareProps> = ({ value, onClick }) => {
  return <Button onClick={onClick}>{value}</Button>
}

const Button = styled.button`
  box-shadow: none;
  border-width: 2px;
  border-style: solid;
  background: var(--theme-color);
  height: var(--cell-size);
`

export default React.memo(Square)
