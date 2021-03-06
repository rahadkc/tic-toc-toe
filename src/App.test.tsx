import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('render App component without crash', () => {
  const element = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(element).toMatchSnapshot()
})
