import ApiCaller from "src/Utils/apiCaller/apiCaller";

import * as a from "../../constant";
import { toast } from "react-toastify";

export const FetchDataBookRoom = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("bookroom/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_BOOKROOM, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
}; //lấy data bookroom  hiển thị table 
export const AddDataBookRoom = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("bookroom/create", "POST", data);
      dispatch({ type: a.ADD_DATA_BOOKROOM, payload: res.data.result });
      toast.success("Successfully added new!!");
      // window.location.reload();
    } catch (error) {
      toast.error("Add new failed!!");
    }
  };
};

export const UpdateDataBookRoom = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`bookroom/update/${id}`, "PUT", data);
      if (res.status === 200) {
        dispatch({
          type: a.UPDATE_DATA_BOOKROOM,
          payload: res.data.result,
        });
        toast.success("Update Successfully!!");
      }
    } catch (error) {
      toast.error("Update failed!!");
    }
  };
};
