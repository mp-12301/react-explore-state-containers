import { createStore, combineReducers } from 'redux'

import reducers from './reducers'

const { Counter, Mood, Color } = reducers

const rootReducer = combineReducers({
  counter: Counter,
  mood: Mood,
  color: Color,
})

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
