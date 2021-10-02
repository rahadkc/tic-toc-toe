import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import ToolBar from '../tool-bar'

describe('<ToolBar>', () => {
  afterEach(cleanup)

  test('render ToolBar component', async () => {
    const element = render(
      <Provider store={store}>
        <ToolBar />
      </Provider>
    )
    expect(element).toMatchSnapshot()
  })
})
