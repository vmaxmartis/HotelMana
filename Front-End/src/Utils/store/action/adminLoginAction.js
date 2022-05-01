import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";

import * as a from "../../constant";
import { toast } from "react-toastify";

export const AdminLoginAction = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("login", "POST", { username, password });
      if (
        (res.status === 200 && res.data.role === "Admin") ||
        (res.status === 200 && res.data.role === "Root")
      ) {
        cookie.save("ADMIN_DATA", res.data);
        dispatch({ type: a.LOGIN_ADMIN, payload: res.data.Token });
        toast.success("Login Success");
      } else if (res.data.role === "User") {
        toast.warning("User is not an Admin");
        cookie.remove("ADMIN_DATA");
      }
    } catch (error) {
      toast.error("Incorrect login or password!");
    }
  };
};

export const UserLoginAction = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("login", "POST", { username, password });
      if (
        (res.status === 200 && res.data.role === "User") ||
        res.data.role === "Admin"
      ) {
        cookie.save("ADMIN_DATA", res.data);
        dispatch({ type: a.LOGIN_USER, payload: res.data.Token });
        toast.success("Login Success");
      } else if (res.data.role === "Root") {
        toast.warning("Login Failed");
        cookie.remove("ADMIN_DATA");
      }
    } catch (error) {
      toast.error("Incorrect login or password!");
    }
  };
};

export const AdminLogut = () => {
  return (dispatch) => {
    try {
      cookie.remove("ADMIN_DATA");
      dispatch({ type: a.LOGOUT_ADMIN });
      toast.success("Logout Success");
    } catch (error) {
      toast.error("Logout Failed!");
    }
  };
};
