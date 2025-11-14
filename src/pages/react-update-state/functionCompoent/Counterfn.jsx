import { useState } from "react";

export default function Counterfn() {
  const [count, setCount] = useState(0);

  return (
    <div className="base-container">
      <div className="heading">
        <h1> Simple counter program using Function Component </h1>
      </div>
      <div className="show-count">
        <h3>
          Count : <span> {count} </span>
        </h3>
      </div>
      <div className="actions">
        <button onClick={() => setCount(count + 1)}> ADD </button>
        <button onClick={() => setCount(count - 1)} disabled={count == 0}>
          SUB
        </button>
      </div>
    </div>
  );
}
