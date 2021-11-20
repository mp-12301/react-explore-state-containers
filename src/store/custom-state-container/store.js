import React, { useReducer, useContext } from 'react'

import reducers from '../reducers'

const { Counter, Mood, Color } = reducers

const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers)
  const initialCombinedState = reducerKeys
      .reduce((combinedState, reducerKey) => ({
        ...combinedState,
        [reducerKey]: {},
      }), {})

  return (state = initialCombinedState, action) => {
    const newState = { ...state }

    for (let i = 0; i < reducerKeys.length; i++) {
      const reducerKey = reducerKeys[i]

      const reducer = reducers[reducerKey] 
      const reducerState = newState[reducerKey]

      newState[reducerKey] = reducer(reducerState, action)
    }

    return newState
  }
}

const Context = React.createContext()

const rootReducer = combineReducers({
  mood: Mood,
  counter: Counter,
  color: Color,
})
const initialState = rootReducer(null, {type: '@@INIT'})
console.log('derp')
export const ContextStore = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  const contextValue = {
    state,
    dispatch
  }

  console.log('state', initialState, state)

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export const useSelector = (fn) => {
  const { state } = useContext(Context) 
  return fn(state)
}

export const useDispatch = () => {
  const { dispatch } = useContext(Context)
  return dispatch
}

let isDispatching = false
const nextListeners = []

const subscribe = (listener) => {
  let isSubscribed = true

  nextListeners.push(listener)

  return function unsubscribe() {
    if (!isSubscribed) {
      return
    }

    isSubscribed = false

    const index = nextListeners.indexOf(listener)
    nextListeners.splice(index, 1)
  }
}

