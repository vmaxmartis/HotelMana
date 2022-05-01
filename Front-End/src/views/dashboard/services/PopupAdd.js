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
import { FetchDataService } from "src/Utils/store/action/serviceAction";

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

  const [name, setNameService] = useState("");
  const [price, setPriceService] = useState(0);

  const dispatch = useDispatch();

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      dispatch(AddDataService(data));
    }
    setVisibleLg(false);
  };

  const handleReset = () => {
    reset({});
    setNameService("");
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
              <CFormLabel htmlFor="validationTooltip01">Name</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip01"
                placeholder="Name"
                value={name}
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z0-9 ]+$/i,
                })}
                onChange={(e) => setNameService(e.target.value)}
                required
              />
              {errors.name?.type === "required" && (
                <p className="text-danger mt-2">Name Service is required</p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="text-danger mt-2">
                  {" "}
                  Name Service does not contain special characters
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
                <p className="text-danger mt-2"> Price Service is required</p>
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
  ({ name, price, hotelId }) => ({
    name,
    price,
    hotelId,
  }),
  AddDataService
)(PopupAdd);
export default PopupAdd;
