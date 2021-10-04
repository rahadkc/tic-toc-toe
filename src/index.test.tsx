import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './app/store'

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Index - Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)
    require('./index.tsx')
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      div
    )
  })
})
