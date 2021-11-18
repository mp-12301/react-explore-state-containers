import React from 'react'

import { useCounter } from '../../../hooks/counter.js'

function ComponentB1() {
  // const { count, increment, decrement } = useCounter()

  console.log('render componentB1')

  return (
    <div className="container">
      Im component B1
    </div>
  );
}

export default ComponentB1;

