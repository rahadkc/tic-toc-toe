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
  font-size: 20px;
  font-family: Lucida Sans Unicode;
  background: transparent;
  color: white;
  font-size: 48px;
`

export default React.memo(ToolBar)
