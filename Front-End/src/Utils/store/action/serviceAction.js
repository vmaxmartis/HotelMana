import ApiCaller from "src/Utils/apiCaller/apiCaller";
import * as a from "../../constant";
import { toast } from "react-toastify";

export const FetchDataService = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("services/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_SERVICE, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddDataService = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("services/create", "POST", data);
      if (res.status === 200) {
        dispatch({ type: a.ADD_DATA_SERVICE, payload: res.data.inforService });
        toast.success("Added Successfully!!");
      }
    } catch (error) {
      toast.error("Added failed!!");
    }
  };
};

export const UpdateDataService = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`services/update/${id}`, "PUT", data);
      if (res.status === 200) {
        dispatch({
          type: a.UPDATE_DATA_SERVICE,
          payload: res.data.inforService,
        });
        toast.success("Update Successfully!!");
      }
    } catch (error) {
      toast.error("Update failed!!");
    }
  };
};

export const DeleteDataService = (serviceId) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(
        `services/delete/${serviceId}`,
        "DELETE",
        null
      );
      dispatch({ type: a.DELETE_DATA_SERVICE, payload: res.data.inforService });
      toast.success("Deleted Successfully!!");
    } catch (error) {
      toast.error("Deleted failed!!");
    }
  };
};
