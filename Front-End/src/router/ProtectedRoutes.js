import React from "react";
import { PropTypes } from "prop-types";
import Auth from "src/Utils/Auth/auth";

import { Navigate, Outlet } from "react-router-dom";
import cookie from "react-cookies";

const ProtectedRoutes = ({ redirect }) => {
  let isAdmin = cookie.load("ADMIN_DATA") || {};

  const isAuth = Auth();
  return isAuth ? <Outlet /> : <Navigate to={redirect} />;
};
ProtectedRoutes.propTypes = {
  redirect: PropTypes.node,
};
export default ProtectedRoutes;
