import React, { useState, useEffect } from "react";

function UseEffectComponent() {
  const [count, setCount] = useState(0); // count : 2
  const [number, setNumber] = useState(100);
  const [arr, setArr] = useState([100]);

  useEffect(() => {
    console.log("useEffect is running, always");
  });

  useEffect(() => {
    console.log("useEffect is running, count changed nor arr changed");
  }, [count, arr]);

  useEffect(() => {
    console.log("useEffect is running, one after first render");
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className="container">
      <h5>Count</h5>
      <div className="d-flex justify-content-around" style={{ width: "200px" }}>
        <button className="btn btn-outline-primary" onClick={decrementCount}>
          -
        </button>
        <p className="lead">{count}</p>
        <button className="btn btn-outline-primary" onClick={incrementCount}>
          +
        </button>
      </div>
      <h5>Number</h5>
      <div
        className="d-flex justify-content-around mt-5"
        style={{ width: "200px" }}
      >
        <button className="btn btn-outline-primary" onClick={decrementNumber}>
          -
        </button>
        <p className="lead">{number}</p>
        <button className="btn btn-outline-primary" onClick={incrementNumber}>
          +
        </button>
      </div>
    </div>
  );
}

export default UseEffectComponent;
