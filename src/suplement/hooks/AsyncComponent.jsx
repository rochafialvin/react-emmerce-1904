import axios from "../../utils/axios";
import { useState, useEffect } from "react";

function AsyncComponent() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get("/users", {
        params: { username: "rochafi", password: "password" },
      });
      const boruto = response.data[0].id;
      const res = await axios.get("/transactions", {
        params: { userId: boruto },
      });

      console.log(res);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return (
    <div>
      <h1>Async</h1>
    </div>
  );
}

export default AsyncComponent;
