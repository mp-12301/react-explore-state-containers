import React from 'react'

import ComponentB1 from '../ComponentB1'

import { useCounter } from '../../hooks/counter.js'

function ComponentB() {
  const { count, increment, decrement } = useCounter()

  console.log('render ComponentB')

  return (
    <div className="container">
      <h4>Im component B</h4>
      
      <div>** count: { count }</div>
      <button onClick={increment}>Increment from B</button>
      <button onClick={decrement}>Decrement from B</button>

      <ComponentB1 />
    </div>
  );
}

export default ComponentB;
