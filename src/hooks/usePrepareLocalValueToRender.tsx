import { Cross } from '../component/cross'
import { Circle } from '../component/circle'
import { GameStateLocalType, GameStateType } from '../features/tic-toc-toe/types'

export function usePrepareLocalValueToRender(values: GameStateLocalType): GameStateType {
  const squares = values.squares.map((square: any) => {
    if (!square) return null
    const iconData: any = square.icon === 'X' ? <Cross /> : <Circle />

    return {
      value: square.value ? square.value : null,
      icon: iconData
    }
  })

  return { squares, xIsNext: values.xIsNext }
}
