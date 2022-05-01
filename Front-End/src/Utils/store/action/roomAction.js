import ApiCaller from "src/Utils/apiCaller/apiCaller";

import * as a from "../../constant";
import { toast } from "react-toastify";

export const FetchDataRoom = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("room/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_ROOM, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
export const AddDataRoom = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("room/create", "POST", data);
      dispatch({ type: a.ADD_DATA_ROOM, payload: res.data.result });
      toast.success("Successfully added new!!");
    } catch (error) {
      toast.error("Add new failed!!");
    }
  };
};

export const FetchDataTypeRoom = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("roomtype/findAll", "GET", null);
      dispatch({ type: a.GET_TYPE_DATA, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateDataRoom = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`room/update/${id}`, "PUT", data);
      if (res.status === 200) {
        dispatch({
          type: a.UPDATE_DATA_ROOM,
          payload: res.data.result,
        });
        toast.success("Update Successfully!!");
      }
    } catch (error) {
      toast.error("Update failed!!");
    }
  };
};

export const DeleteDataRoom = (roomId) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`room/delete/${roomId}`, "DELETE", null);
      dispatch({ type: a.DELETE_DATA_ROOM, payload: res.data.result });
      toast.success("Deleted Successfully!!");
    } catch (error) {
      toast.error("Deleted failed!!");
    }
  };
};