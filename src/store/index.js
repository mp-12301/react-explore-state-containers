import React, { useReducer } from 'react'
import { createStore } from 'redux'

const initialState = {
  value: 0,
  status: 'happy',
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    case 'counter/set_status':
      return { ...state, status: action.status }
    default:
      return state
  }
}

// Context with simple store
export const Context = React.createContext()

export const ContextStore = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const store = {
    ...state,
    dispatch
  }

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}

// Redux store
const store = createStore(counterReducer)

export default store
