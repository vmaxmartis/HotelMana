import React from "react";
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
import { useState } from "react";

import { useDispatch, connect } from "react-redux";
import { UpdateDataService } from "src/Utils/store/action/serviceAction";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { VscEdit } from "react-icons/vsc";

const PopupUpdate = (props) => {
  const { nameSer, priceSer, HotelId, serviceId } = props;
  const [visibleLg, setVisibleLg] = useState(false);

  const [name, setNameService] = useState(nameSer);
  const [price, setPriceService] = useState(priceSer);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  const handleOnSubmit = (data) => {
    if (serviceId && data) {
      dispatch(UpdateDataService(serviceId, data));
    }
    setVisibleLg(false);
  };

  return (
    <>
      <CButton shape="rounded" variant="outline"   color="info" onClick={() => setVisibleLg(!visibleLg)}>
        <VscEdit size={15} /> Edit
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
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
PopupUpdate.propTypes = {
  serviceId: PropTypes.node,
  nameSer: PropTypes.node,
  priceSer: PropTypes.node,
  HotelId: PropTypes.node,
};
connect(
  ({ name, price, hotelId }) => ({
    name,
    price,
    hotelId,
  }),
  UpdateDataService
)(PopupUpdate);
export default PopupUpdate;
