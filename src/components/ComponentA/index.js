import React from 'react'

import { useCounter } from '../../hooks/counter.js'

function ComponentA() {
  const { count, increment, decrement } = useCounter()

  console.log('render componentA')

  return (
    <div className="container">
      <h4>Im component A</h4>
      <div>** count: { count }</div>
      <button onClick={increment}>Increment from A</button>
      <button onClick={decrement}>Decrement from A</button>
    </div>
  );
}

export default ComponentA;
