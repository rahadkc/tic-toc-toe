import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store, persistor } from './app/store'
import { PersistGate } from 'redux-persist/integration/react'

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
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </React.StrictMode>,
      div
    )
  })
})
