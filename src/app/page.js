"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function addCounter() {
    setCount(count + 1);
  }

  return (
    <div className="my-16 text-center">
      {/* Admin Dashboard */}
      <button onClick={addCounter} className="btn">
        Add
      </button>

      <button onClick={() => setCount(count - 1)} className="btn">
        Sub
      </button>

      <div>{count}</div>
    </div>
  );
}
