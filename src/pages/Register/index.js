import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";

function Register() {
  const initFormState = {
    fullName: "",
    username: "",
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initFormState);
  const { fullName, username, email, password } = formState;
  const usernameLogin = useSelector((state) => state.auth.username);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onRegisterClick = async () => {
    try {
      const newUser = {
        id: new Date().getTime(),
        role: "user",
        username,
        fullName,
        email,
        password,
      };
      await axios.post("/users", newUser);
      setFormState(initFormState);
      alert("Register berhasil");
    } catch (error) {
      alert("Register gagal");
    }
  };

  if (usernameLogin) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Register now!</h1>
          <p className="lead">
            Register now and start shopping in the most affordable ecommerce
            platform
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">Register</h5>
              <input
                name="fullName"
                onChange={handleChange}
                placeholder="Full Name"
                type="text"
                className="form-control my-2"
                value={fullName}
              />
              <input
                name="username"
                onChange={handleChange}
                placeholder="Username"
                type="text"
                className="form-control my-2"
                value={username}
              />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="text"
                className="form-control my-2"
                value={email}
              />
              <input
                name="password"
                onChange={handleChange}
                placeholder="Password"
                type="password"
                className="form-control my-2"
                value={password}
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button
                  onClick={onRegisterClick}
                  className="btn btn-primary mt-2"
                >
                  Register
                </button>
                <Link to="/login">Or login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
