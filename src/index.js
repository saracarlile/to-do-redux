import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'


const initialState = { 
  todos: [{id:123, text:'say hello', completed: false}]
};


const store = createStore(
  rootReducer,
  initialState
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)