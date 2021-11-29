import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginAction } from "../../store/actions";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onLoginClick = () => {
    axios
      .get("/users", {
        params: { username: formState.username, password: formState.password },
      })
      .then((res) => {
        const { id, username, role } = res.data[0];
        loginAction({ dispatch, id, username, role });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Log in now!</h1>
          <p className="lead">
            Log in now and start shopping in the most affordable ecommerce
            platform
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">Log in</h5>
              <input
                name="username"
                placeholder="Username"
                type="text"
                className="form-control my-2"
                onChange={handleChange}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                className="form-control my-2"
                onChange={handleChange}
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button onClick={onLoginClick} className="btn btn-primary mt-2">
                  Login
                </button>
                <Link to="/register">Or register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
