import React from 'react'

import ComponentB1 from '../ComponentB/ComponentB1/index.js'

import { useCounter } from '../../hooks/counter.js'

function ComponentB() {
  const { count, increment, decrement, setStatus} = useCounter()

  console.log('render ComponentB')

  return (
    <div className="container">
      Im component B
      value: { count }
      <ComponentB1 />
      <button onClick={increment}>Increment from B</button>
      <button onClick={decrement}>Decrement from B</button>
      <button onClick={() => setStatus('sad')}>Set status sad from B</button>
    </div>
  );
}

export default ComponentB;
