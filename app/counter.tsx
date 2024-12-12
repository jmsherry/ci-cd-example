"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>change</p>
      <h2>Bad thing {count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}
