import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import Board from '../board'

describe('<Board>', () => {
  afterEach(cleanup)

  test('render Board component', () => {
    const element = render(
      <Provider store={store}>
        <Board />
      </Provider>
    )
    expect(element).toMatchSnapshot()
  })
})
