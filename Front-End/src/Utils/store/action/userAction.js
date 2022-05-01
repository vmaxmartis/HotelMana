import * as a from "../../constant";
import ApiCaller from "src/Utils/apiCaller/apiCaller";
import { toast } from "react-toastify";

export const FetchDataUser = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("users/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_USERS, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
export const AddDataUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("users/create", "POST", data);
      if (res.status === 200) {
        dispatch({ type: a.ADD_DATA_USERS, payload: res.data.result });
        toast.success("Successfully!!");
      }
    } catch (error) {
      toast.error("Username already exists!!");
    }
  };
};
export const UpdateDataUser = (data, id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`users/update/${id}`, "PUT", data);
      if (res.status === 200) {
        dispatch({ type: a.UPDATE_DATA_USERS, payload: res.data.result });
        toast.success("Update Successfully!!");
      }
    } catch (error) {
      toast.error("Update failed!!");
    }
  };
};
export const DeleteDataUser = (id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`users/delete/${id}`, "DELETE", null);
      if (res.status === 200) {
        dispatch({ type: a.DELETE_DATA_USERS, payload: res.data.result });
        toast.success("Deleted Successfully!!");
      }
    } catch (error) {
      toast.error("Deleted failed!!");
    }
  };
};

export const LoadListRole = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("role/findall", "GET", null);
      if (res.status === 200) {
        dispatch({ type: a.GET_DATA_ROLE, payload: res.data.result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const CurrentUserLogin = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("users/userCurentLogin", "GET", null);
      if (res.status === 200)
        dispatch({ type: a.GET_DATA_USERS_LOGIN, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
export const UpdateCurrentUserLogin = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("users/userCurentLogin/update", "PUT", data);
      if (res.status === 200) {
        dispatch({
          type: a.UPDATE_DATA_CURRENT_USERS,
          payload: res.data.result,
        });
        toast.success("Update Successfully!!");
      }
    } catch (error) {
      toast.error("Update failed!!");
    }
  };
};
