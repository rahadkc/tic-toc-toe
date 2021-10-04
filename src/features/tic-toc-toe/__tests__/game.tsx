import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import Game from '..'

describe('<Game>', () => {
  afterEach(cleanup)

  test('render Game component without crash', () => {
    const element = render(
      <Provider store={store}>
        <Game />
      </Provider>
    )
    expect(element).toMatchSnapshot()
  })
})
