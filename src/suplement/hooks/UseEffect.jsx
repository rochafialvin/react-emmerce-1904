import { useEffect, useState } from "react";

function UseEffect() {
  // state berubah --> render --> useEfffect
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Menerima 2 argument
  // 1. Function (wajib)
  // 2. Array (optional)

  // Akan running setiap kali render
  useEffect(() => {
    console.log("useEffect");
  });

  // Akan running hanya setelah render yang pertama
  useEffect(() => {
    console.log("useEffect");
  }, []);

  // Akan running setiap kali render jika count 1 atau count 2 berubah
  useEffect(() => {
    console.log("useEffect");
  }, [count1, count2]);

  console.log("render");
  return (
    <div>
      <h1>UseEffect Component</h1>
      <h3>{count1}</h3>
      <button
        onClick={() => {
          console.log("State count 1 akan berubah");
          setCount1(count1 + 1);
        }}
      >
        Count 1
      </button>

      <h3>{count2}</h3>
      <button
        onClick={() => {
          console.log("State count 2 akan berubah");
          setCount2(count2 + 1);
        }}
      >
        count 2
      </button>

      <h3>{count3}</h3>
      <button
        onClick={() => {
          console.log("State count 3 akan berubah");
          setCount3(count3 + 1);
        }}
      >
        count 3
      </button>
    </div>
  );
}

export default UseEffect;

/*
  Class Component :
  - State
  - Props
  - lifecycle method (componentDidMount)

  Function Component : + Performance
  - Props
  - State (useState)
  - lifecycle method (useEffect)


  componentDidMount : Hanya akan running hanya setelah render yang pertama kali
  useEffect : running setiap render
*/
