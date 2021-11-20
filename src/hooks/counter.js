import React, { useContext } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useSelector, useDispatch } from '../store/custom-state-container/store'

export function useCounter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  //  const { value: count, dispatch } = useContext(Context)

  const increment = () => dispatch({type: 'counter/incremented'})
  const decrement = () => dispatch({type: 'counter/decremented'})

  return {
    count,
    increment,
    decrement,
  }
}
