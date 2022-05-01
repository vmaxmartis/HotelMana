import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import { AddDataUser } from "src/Utils/store/action/userAction";
import "../login/login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [birtDate, setBirthday] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [roleId, setRoleId] = useState("f69cc796-beb6-11ec-9d64-0242ac120002");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnSubmit = (data) => {
    dispatch(AddDataUser(data));
    // navigate("/login");
  };

  return (
    <div className="bg-dark min-vh-100 d-flex  flex-row align-items-center">
      <section className="body-userlogin  min-vh-100">
        <div className="login-block">
          <h1>Register</h1>
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">Password is required</p>
            )}
            <input
              type="text"
              defaultValue={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
              id="fullName"
              {...register("fullName", {
                required: true,
                maxLength: 24,
                pattern: /^[A-Za-z0-9 ]+$/i,
              })}
            />
            {errors.fullName?.type === "required" && (
              <p className="text-danger mt-2">fullName is required</p>
            )}
            {errors.fullName?.type === "maxLength" && (
              <p className="text-danger mt-2">
                FullName not than 24 characters long
              </p>
            )}
            {errors.fullName?.type === "pattern" && (
              <p className="text-danger mt-2">
                FullName does not contain special characters
              </p>
            )}
            <input
              type="date"
              id="validationTooltip04"
              placeholder="Birthday"
              value={birtDate}
              {...register("birtDate", { required: true })}
              onChange={(e) => setBirthday(e.target.value)}
            />
            {errors.username?.type === "required" && (
              <p className="text-danger mt-2">birtDate is required</p>
            )}
            <input
              type="text"
              id="validationTooltip05"
              placeholder="Adress"
              value={adress}
              {...register("adress", { required: true })}
              onChange={(e) => setAdress(e.target.value)}
            />
            {errors.adress?.type === "required" && (
              <p className="text-danger mt-2">adress is required</p>
            )}
            <input
              type="number"
              id="validationTooltip06"
              placeholder="Phone"
              value={phone}
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone?.type === "required" && (
              <p className="text-danger mt-2">phone is required</p>
            )}
            {errors.phone?.type === "minLength" && (
              <p className="text-danger mt-2">
                {" "}
                Number phone must be 10 characters long
              </p>
            )}
            {errors.phone?.type === "maxLength" && (
              <p className="text-danger mt-2">
                {" "}
                Number phone not than 10 characters long
              </p>
            )}
            <input
              // disabled
              type="text"
              id="role"
              placeholder="roleId"
              value={roleId}
              {...register("roleId", { required: true })}
              onChange={(e) => setRoleId(e.target.value)}
            />
            {errors.roleId?.type === "required" && (
              <p className="text-danger mt-2">roleId is required</p>
            )}
            <button type="submit" className="btn-primary mb-2 mt-3">
              Register
            </button>
          </form>

          <Link to="/login">Back</Link>
        </div>
      </section>
    </div>
  );
};
connect(
  ({ username, password, fullName, phone, birtDate, roleId, adress }) => ({
    username,
    password,
    fullName,
    phone,
    birtDate,
    roleId,
    adress,
  }),
  AddDataUser
)(Register);
export default Register;
