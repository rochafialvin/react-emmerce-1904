import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { loginAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onInputPress = (e) => {
    if (e.code === "Enter") onLogin();
  };

  const onLogin = async () => {
    setIsLoading(true);
    setTimeout(() => {
      const action = loginAction(formState);
      dispatch(action); // --> kirim ke reducer --> kirim ke state (selesai)
      setIsLoading(false);
    }, 2000);
  };

  const onLoginClick = () => {
    onLogin();
  };

  if (username) {
    return <Navigate to="/" replace />;
  }

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
                onKeyPress={onInputPress}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                className="form-control my-2"
                onChange={handleChange}
                onKeyPress={onInputPress}
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button
                  onClick={onLoginClick}
                  className={`btn btn-primary mt-2 ${isLoading && "disabled"} `}
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                  ) : (
                    "Login"
                  )}
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
