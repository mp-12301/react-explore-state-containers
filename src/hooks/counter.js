import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Context } from '../store/index.js'

export function useCounter() {
  const count = useSelector(state => state.value)
  const dispatch = useDispatch()
  //  const { value: count, dispatch } = useContext(Context)

  const increment = () => dispatch({type: 'counter/incremented'})
  const decrement = () => dispatch({type: 'counter/decremented'})
  const setStatus = (status) => dispatch({type: 'counter/set_status', status: status })

  return {
    count,
    increment,
    decrement,
    setStatus,
  }
}
