import React, { useState } from "react";
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
  CSpinner,
} from "@coreui/react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, connect } from "react-redux";
import { useForm } from "react-hook-form";
import { AddDataHotel } from "src/Utils/store/action/hotelAction";
import { useSelector } from "react-redux";

const PopupAdd = () => {
  const [validated, setValidated] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);

  const pending = useSelector((state) => state.hotel.pending);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  const [name, setNameHotel] = useState("");
  const [adress, setAdressHotel] = useState("");
  const [phone, setPhoneHotel] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleOnSubmit = (data) => {
    if (data) {
      dispatch(AddDataHotel(data));
    }
    setVisibleLg(false);
  };
  const handleReset = () => {
    reset({});
    setNameHotel("");
    setAdressHotel("");
    setPhoneHotel("");
    setEmail("");
    setVisibleLg(false);
  };

  return (
    <>
     
      <CButton
        variant="outline"
        color="success"
        onClick={() => setVisibleLg(!visibleLg)}
      >
          {pending ? 
          <><CSpinner component="span" size="sm" aria-hidden="true"/>
          Loading...</> : 
          <><VscAdd size={15} /> Add</>
          } 
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={handleReset}>
        <CModalHeader>
          <CModalTitle>Add Services</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 "
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip01">Name Hotel</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip01"
                placeholder="Hotel name"
                value={name}
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z0-9 ]+$/i,
                })}
                onChange={(e) => setNameHotel(e.target.value)}
                required
              />
              {errors.name?.type === "required" && (
                <p className="text-danger mt-2">Hotel name is required</p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="text-danger mt-2">
                  Hotel does not contain special characters
                </p>
              )}
            </CCol>
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Address</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip02"
                placeholder="Adress"
                {...register("adress", {
                  required: true,
                })}
                value={adress}
                onChange={(e) => setAdressHotel(e.target.value)}
                required
              />
              {errors.adress?.type === "required" && (
                <p className="text-danger mt-2">Address Hotel is required</p>
              )}
            </CCol>
            <CCol md={5} className="position-relative">
              <CFormLabel htmlFor="validationTooltip03">Phone</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip03"
                placeholder="Phone Hotel"
                value={phone}
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
                onChange={(e) => setPhoneHotel(e.target.value)}
                required
              />
              {errors.phone?.type === "required" && (
                <p className="text-danger mt-2">Phone Hotel is required</p>
              )}
              {errors.phone?.type === "minLength" && (
                <p className="text-danger mt-2">
                  {" "}
                  Number phone must be 10 characters long
                </p>
              )}
              {errors.phone?.type === "maxLength" && (
                <p className="text-danger mt-2">
                  {" "}
                  Number phone not than 10 characters long
                </p>
              )}
            </CCol>
            <CCol md={7} className="position-relative">
              <CFormLabel htmlFor="validationTooltip03">Email</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip03"
                placeholder="Email Hotel"
                value={email}
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email?.type === "required" && (
                <p className="text-danger mt-2">Email Hotel is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-danger mt-2">
                  Entered value does not match email format
                </p>
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
  ({ name, adress, phone, email }) => ({
    name,
    adress,
    phone,
    email,
  }),
  AddDataHotel
)(PopupAdd);
export default PopupAdd;
