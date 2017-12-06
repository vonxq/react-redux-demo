import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers/index'
import { combineReducers } from 'redux'
import counter from './reducers/counter'
import countertest from './reducers/countertest'

const store = createStore(combineReducers({ counter, countertest}))
console.log('stateee', store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)