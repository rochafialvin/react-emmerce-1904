import React, { useState, useMemo } from "react";

function loopFunction(number) {
  console.log("Loop Function is running");
  for (let i = 0; i < 1000000000; i++) {} // create delay
  return number * 3;
}

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false); // false

  // cache : 12
  // result : 12
  // useMemo menyimpan "value" yang di return oleh "callback function"
  const result = useMemo(() => {
    return loopFunction(number);
  }, [number]);

  const theme = {
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };

  return (
    <div>
      <h1>Use Memo</h1>

      <h2 style={theme}>{result}</h2>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setIsDark((prevState) => !prevState);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
