import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import Square from '../square'

describe('<Square>', () => {
  afterEach(cleanup)

  test('square: render Square component with null value', () => {
    const value = null
    const element = render(
      <Provider store={store}>
        <Square value={value} onClick={() => {}} />
      </Provider>
    )
    expect(element.container.firstChild).toBeEmpty()
    expect(element).toMatchSnapshot()
  })

  test('square: render Square component with string value', () => {
    const value = 'test'
    const element = render(
      <Provider store={store}>
        <Square value={value} onClick={() => {}} />
      </Provider>
    )
    expect(element.container.firstChild).not.toBeEmpty()
    expect(element.queryByText(value)).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })
})
