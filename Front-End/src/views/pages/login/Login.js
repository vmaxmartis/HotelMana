import React from "react";
import "./login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import { UserLoginAction } from "src/Utils/store/action/adminLoginAction";
import { Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const isLoggIn = useSelector((state) => state.adminLogin.currentAdmin);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const handleOnSubmit = (data) => {
    dispatch(UserLoginAction(data));
    setUserName("");
    setPassWord("");
  };

  return (
    <div className="bg-dark min-vh-100 d-flex  flex-row align-items-center">
      {isLoggIn ? <Navigate to="/" /> : []}
      <section className="body-userlogin  min-vh-100">
        <div className="login-block">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <input
              type="text"
              defaultValue={username}
              onChange={(e) => setUserName(e.target.value)}
              {...register("username", {
                required: true,
                pattern: /^[A-Za-z0-9]+$/i,
              })}
              placeholder="Username"
              id="username"
            />
            {errors.username?.type === "required" && (
              <span className="text-danger pb-3">Username is required</span>
            )}
            {errors.username?.type === "pattern" && (
              <p className="text-danger  p-2">
                {" "}
                Username does not contain special characters
              </p>
            )}
            <input
              type="password"
              defaultValue={password}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Password"
              id="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">Password is required</p>
            )}
            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
connect(
  ({ username, password }) => ({
    username,
    password,
  }),
  UserLoginAction
)(Login);
export default Login;
