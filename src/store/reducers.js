const Counter = () => {
  const initialState = {
    value: 0,
  }

  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

  return counterReducer
}

const Mood = () => {
  const initialState = {
    mood: 'happy'
  }

  const moodReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'mood/set_mood':
        return { mood: action.payload.mood }
      default:
        return state
    }
  }

  return moodReducer
}

const Color = () => {
  const initialState = {
    color: 'black'
  }

  const colorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'color/set_color':
        return { color: action.payload.color }
      default:
        return state
    }
  }

  return colorReducer
}

const reducers = {
  Mood: Mood(),
  Color: Color(),
  Counter: Counter(),
}

export default reducers
