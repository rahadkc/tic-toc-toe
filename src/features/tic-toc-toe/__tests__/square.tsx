import { cleanup, render } from '@testing-library/react'
import Square from '../square'

describe('<Square>', () => {
  afterEach(cleanup)

  test('render Square component with null value', () => {
    const value = null
    const element = render(<Square value={value} onClick={() => {}} />)
    expect(element.container.firstChild).toBeEmpty()
    expect(element).toMatchSnapshot()
  })

  test('render Square component with string value', () => {
    const value = 'test'
    const element = render(<Square value={value} onClick={() => {}} />)
    expect(element.container.firstChild).not.toBeEmpty()
    expect(element.queryByText(value)).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })
})
