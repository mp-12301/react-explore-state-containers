import React from 'react'

import { useCounter } from '../../hooks/counter.js'

function ComponentB1() {
  // const { count, increment, decrement } = useCounter()

  console.log('render componentB1')

  return (
    <div className="container">
      <h4>Im component B1</h4>
    </div>
  );
}

export default ComponentB1;

