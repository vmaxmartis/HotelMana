import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
import { toast } from "react-toastify";

import * as a from "../../constant";

export const FetchDataBill = (id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`bill/getTotalBill/${id}`, "GET", null);
      dispatch({ type: a.GET_DATA_BILL, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const CreateBill = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("bill/create", "POST", data);
      if (res.status === 200) {
        dispatch({ type: a.CREATE_DATA_BILL, payload: res.data.inforBookroom });
        window.location.reload();
        toast.success("Payment Successfully!!");
      }
    } catch (error) {
      toast.error("Payment failed!!");
    }
  };
};
