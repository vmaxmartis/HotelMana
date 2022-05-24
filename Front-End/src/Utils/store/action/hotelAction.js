import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
import { toast } from "react-toastify";
import React from "react";

import * as a from "../../constant";

export const HotelFetchData = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("hotel/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_HOTEL, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddDataHotel = (data) => {
  return async (dispatch) => {
    dispatch({ type: "PENDING" });
    try {
      const res = await ApiCaller("hotel/create", "POST", data);
      if (res.status === 200) {
        dispatch({ type: a.ADD_DATA_HOTEL, payload: res.data.inforHotel });
        toast.success("Added Successfully!!");
      }
    } catch (error) {
      toast.error("Added failed!!");
    }
  };
};

export const DeleteDataHotel = (id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`hotel/delete/${id}`, "DELETE", null);
      dispatch({ type: a.DELETE_DATA_HOTEL, payload: res.data.inforHotel.result});
      toast.success("Deleted Successfully!!");
    } catch (error) {
      toast.error("Deleted failed!!");
    }
  };
};
export const UpdateDataHotel = (data, id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`hotel/update/${id}`, "PUT", data);
      if (res.status === 200) {
        dispatch({ type: a.UPDATE_DATA_HOTEL, payload: res.data.inforHotel });
        toast.success("Updated Successfully!!");
      }
    } catch (error) {
      toast.error("Updated failed!!");
    }
  };
};
