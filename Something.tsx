import * as React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';

export default function Something() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count+1)
  }

  return <div>
    <span>Count: {count}</span>
    <button onClick={increase}>+</button> 

  </div>;
}
