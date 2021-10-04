import { Cross } from '../component/cross'
import { Circle } from '../component/circle'
import { GameStateLocalType, GameStateType, SquareLocalType } from '../features/tic-toc-toe/types'
import { player1 } from '../features/tic-toc-toe/utils/constant'

export function usePrepareLocalValueToRender(values: GameStateLocalType): GameStateType {
  const squares = values.squares.map((square: SquareLocalType) => {
    if (!square) return null
    const iconData: JSX.Element = square.icon === player1 ? <Cross /> : <Circle />

    return {
      value: square.value,
      icon: iconData
    }
  })

  return { squares, xIsNext: values.xIsNext }
}
