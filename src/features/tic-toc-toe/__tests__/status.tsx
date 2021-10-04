import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import Status from '../status'

describe('<Status>', () => {
  afterEach(cleanup)

  const renderStatus = render(
    <Provider store={store}>
      <Status />
    </Provider>
  )
  test('render Status component', () => {
    expect(renderStatus).toMatchSnapshot()
  })

  test('get status from store', () => {
    const getStatus = store.getState().game.status

    expect(getStatus).not.toBeUndefined()
  })
})
