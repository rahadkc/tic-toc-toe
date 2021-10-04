import React from 'react'
import Board from './board'
import ToolBar from './tool-bar'
import styled from 'styled-components'
import Status from './status'

export type IGameProps = {}

const Game: React.FC<IGameProps> = () => {
  return (
    <Wrapper>
      <Status />
      <Box>
        <Board />
        <ToolBar />
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`

const Box = styled.div`
  display: flex;
  align-items: flex-start;
`

export default Game
