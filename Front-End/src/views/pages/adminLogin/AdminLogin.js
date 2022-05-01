import React, { useState, useEffect } from "react";

import "../login/login.css";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useDispatch, useSelector, connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AdminLoginAction } from "src/Utils/store/action/adminLoginAction";

const AdminLogin = () => {
  const [username, setAdminName] = useState("");
  const [password, setPassWord] = useState("");
  const isLoggIn = useSelector((state) => state.adminLogin.currentAdmin);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const handleOnSubmit = (data, e) => {
    dispatch(AdminLoginAction(data));
    setAdminName("");
    setPassWord("");
  };

  return (
    <>
      <div className="bg-dark min-vh-100 d-flex  flex-row align-items-center">
        {isLoggIn ? <Navigate to="/admin" /> : []}
        <section className="body-userlogin  min-vh-100">
          <div className="login-block">
            <h1>ADMIN PANEL</h1>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <input
                type="text"
                defaultValue={username}
                onChange={(e) => setAdminName(e.target.value)}
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
              <button
                type="submit"
                id="btn_admin"
                className="btn-success  mb-2 mt-5"
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
connect(
  ({ username, password }) => ({
    username,
    password,
  }),
  AdminLoginAction
)(AdminLogin);
export default AdminLogin;
