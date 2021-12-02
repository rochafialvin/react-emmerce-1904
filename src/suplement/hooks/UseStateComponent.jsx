import React, { useState } from "react";

function UseStateComponent() {
  // [nilai, function]
  // count : menyimpan data
  // setCount : mengubah data
  const [count, setCount] = useState(0); // count : 2

  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCount) => {
      // 1 + 1 = 2
      return prevCount + 1;
    });
    setCount((prevCount) => {
      // 1 + 1 = 2
      return prevCount + 1;
    });
    setCount((prevCount) => {
      // 1 + 1 = 2
      return prevCount + 1;
    });
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Object
  // person : {lastName : "Doe"}
  const [person, setPerson] = useState({ firstName: "", lastName: "" });

  // "John"
  const firstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };
  // "Doe"
  const lastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  // Array

  const [things, ubahThings] = useState(["mouse", "keyboard"]);

  const addNewData = () => {
    const randomNumber = Math.round(Math.random() * 10);
    ubahThings([...things, randomNumber]);
  };

  return (
    <div className="container ">
      <h1 className="text-center">useState</h1>

      <div>
        <ul>
          {things.map((thing) => {
            return (
              <li>
                <h5>{thing}</h5>
              </li>
            );
          })}
        </ul>

        <button onClick={addNewData}>add new data</button>
      </div>

      {/* <div
        className="d-flex justify-content-around mt-5 mx-auto"
        style={{ width: "200px" }}
      >
        <input type="text" placeholder="firstName" onChange={firstNameChange} />
        <input type="text" placeholder="lastName" onChange={lastNameChange} />

        <h5 className="ms-5">{JSON.stringify(person)}</h5>
      </div> */}

      {/* <div className="d-flex justify-content-around" style={{ width: "200px" }}>
        <button className="btn btn-outline-primary" onClick={decrement}>
          -
        </button>
        <p className="lead">{count}</p>
        <button className="btn btn-outline-primary" onClick={increment}>
          +
        </button>
      </div> */}
    </div>
  );
}

export default UseStateComponent;
