import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0)  // Initialize count state with 0

  return (
    <div>
      <h1>usestate example</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default State
