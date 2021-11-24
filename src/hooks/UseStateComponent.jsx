import React, { useState } from "react";

function UseStateComponent() {
  const [count, setCount] = useState(25);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="text-center">useState</h1>

      <div className="d-flex justify-content-around" style={{ width: "200px" }}>
        <button className="btn btn-outline-primary" onClick={decrement}>
          -
        </button>
        <p className="lead">{count}</p>
        <button className="btn btn-outline-primary" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default UseStateComponent;
