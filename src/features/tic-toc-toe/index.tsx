import React from 'react'
import Board from './board'
import ToolBar from './tool-bar'
import styled from 'styled-components'
import Status from './status'

export type IGameProps = {}

const Game: React.FC<IGameProps> = () => {
  return (
    <Wrapper>
      <Box>
        <Board />
        <Status />
      </Box>
      <ToolBar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 80px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

const Box = styled.div`
  display: flex;
  //   align-items: flex-start;
  align-items: center;
  flex-direction: column;
`

export default Game
