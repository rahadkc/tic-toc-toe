import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../app/hooks'
import { resetGame } from './gameSlice'

export type IToolBarProps = {}

const ToolBar: React.FC<IToolBarProps> = () => {
  const dispatch = useAppDispatch()

  const handleReset = () => {
    dispatch(resetGame())
  }

  return (
    <Grid>
      <Button onClick={handleReset}>&#x21bb;</Button>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-gap: 1;
  justify-content: center;
`

const Button = styled.button`
  box-shadow: none;
  border: none;
  font-family: Lucida Sans Unicode;
  background: rgba(255, 255, 255, 0.15);
  color: var(--theme-color);
  font-size: 48px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  width: 42px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  transition: 0.4s;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`

export default React.memo(ToolBar)
