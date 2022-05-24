import React, { useState, useEffect } from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CFormFeedback,
} from "@coreui/react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, connect } from "react-redux";
import { AddDataService } from "src/Utils/store/action/serviceAction";
import { useForm } from "react-hook-form";
import { AddDataRoomType } from "src/Utils/store/action/roomAction";

const PopupAdd = () => {
  const [visibleLg, setVisibleLg] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const [type, settypeService] = useState("");
  const [price, setPriceService] = useState("");

  const dispatch = useDispatch();

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      dispatch(AddDataRoomType(data));
    }
    setVisibleLg(false);
  };

  const handleReset = () => {
    reset({});
    settypeService("");
    setPriceService("");
    setVisibleLg(false);
  };

  return (
    <>
      <CButton variant="outline" color="success" onClick={() => setVisibleLg(!visibleLg)}>
        <VscAdd size={15} /> Add
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={handleReset}>
        <CModalHeader>
          <CModalTitle>Add Services</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip01">Type</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip01"
                placeholder="type"
                value={type}
                {...register("type", {
                  required: true,
                  pattern: /^[A-Za-z0-9 ]+$/i,
                })}
                onChange={(e) => settypeService(e.target.value)}
                required
              />
              {errors.type?.type === "required" && (
                <p className="text-danger mt-2">type  is required</p>
              )}
              {errors.type?.type === "pattern" && (
                <p className="text-danger mt-2">
                  {" "}
                  type  does not contain special characters
                </p>
              )}
            </CCol>
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Price</CFormLabel>
              <CFormInput
                type="number"
                id="validationTooltip02"
                placeholder="Price"
                value={price}
                {...register("price", {
                  required: true,
                })}
                onChange={(e) => setPriceService(e.target.value)}
                required
              />
              {errors.price?.type === "required" && (
                <p className="text-danger mt-2"> Price  is required</p>
              )}
            </CCol>

            <CModalFooter>
              <CButton color="secondary" onClick={handleReset}>
                Close
              </CButton>
              <CButton color="success" type="submit">
                Add
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};
connect(
  ({ type, price }) => ({
    type,
    price,
  }),
  AddDataService
)(PopupAdd);
export default PopupAdd;
