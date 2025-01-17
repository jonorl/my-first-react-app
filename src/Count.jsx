import { useState } from 'react'

export default function Component() {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1); 
    };
  
    return (
      <>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
      </>
    );
  }