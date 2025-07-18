import React, { useState, useRef } from "react";

export default function UseRef() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  console.log("App rendered");

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>useState counter: {stateCount}</h2>
      <button onClick={() => setStateCount(stateCount + 1)}>
        +1 state (renders)
      </button>

      <h2 style={{ marginTop: 20 }}>
        useRef counter: {refCount.current}
      </h2>
      <button
        onClick={() => {
          refCount.current += 1;
          console.log("refCount now:", refCount.current);
        }}
      >
        +1 ref (no render)
      </button>
    </div>
  );
}
