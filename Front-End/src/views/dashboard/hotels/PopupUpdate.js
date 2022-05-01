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
} from "@coreui/react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, connect } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { UpdateDataHotel } from "src/Utils/store/action/hotelAction";

const PopupUpdate = (props) => {
  const [validated, setValidated] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  const { nameHotel, dressHotel, phoneHotel, emailHotel, hotelId } = props;

  const [name, setNameHotel] = useState(nameHotel);
  const [adress, setAdressHotel] = useState(dressHotel);
  const [phone, setPhoneHotel] = useState(phoneHotel);
  const [email, setEmail] = useState(emailHotel);

  const dispatch = useDispatch();

  const handleOnSubmit = (data) => {
    if (hotelId && hotelId !== null) {
      dispatch(UpdateDataHotel(data, hotelId));
      reset({ ...data });
      setVisibleLg(false);
    }
    // window.location.reload();
  };

  return (
    <>
      <CButton color="warning" onClick={() => setVisibleLg(!visibleLg)}>
        <VscAdd size={15} /> Edit
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
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
              <CFormLabel htmlFor="validationTooltip02">Adress</CFormLabel>
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
                <p className="text-danger mt-2">Adress Hotel is required</p>
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
                  minLength: 11,
                  maxLength: 11,
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
                  Number phone must be 11 characters long
                </p>
              )}
              {errors.phone?.type === "maxLength" && (
                <p className="text-danger mt-2">
                  {" "}
                  Number phone not than 11 characters long
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
              <CButton color="secondary" onClick={() => setVisibleLg(false)}>
                Close
              </CButton>
              <CButton color="success" type="submit">
                Update
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
  UpdateDataHotel
)(PopupUpdate);

PopupUpdate.propTypes = {
  hotelId: PropTypes.node,
  nameHotel: PropTypes.node,
  dressHotel: PropTypes.node,
  phoneHotel: PropTypes.node,
  emailHotel: PropTypes.node,
};

export default PopupUpdate;
