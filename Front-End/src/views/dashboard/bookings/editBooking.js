import React from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CFormSelect,
  CFormFeedback,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CDateRangePicker } from "@coreui/react-pro";

const EditBooking = () => {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const handleClickBack = () => {
    navigate("/bookings");
  };
  return (
    <>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
          <CFormInput
            type="text"
            id="validationTooltip01"
            defaultValue="Mark"
            required
          />
          <CFormFeedback tooltip valid>
            Looks good!
          </CFormFeedback>
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="validationTooltip02">Name</CFormLabel>
          <CFormInput
            type="text"
            id="validationTooltip02"
            defaultValue="Otto"
            required
          />
          <CFormFeedback tooltip valid>
            Looks good!
          </CFormFeedback>
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="validationTooltipUsername">Room type</CFormLabel>
          <CInputGroup className="has-validation">
            <CFormInput
              type="text"
              id="validationTooltipUsername"
              defaultValue=""
              aria-describedby="inputGroupPrepend"
              required
            />
            <CFormFeedback tooltip invalid>
              Please choose a room type.
            </CFormFeedback>
          </CInputGroup>
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="validationTooltip03">Time</CFormLabel>
          <CDateRangePicker
            startDate="2022/08/03"
            endDate="2022/08/17"
            locale="en-US"
            id="validationTooltip03"
          />
          <CFormFeedback tooltip invalid>
            Please provide a valid city.
          </CFormFeedback>
        </CCol>
        <CCol md={3} className="position-relative">
          <CFormLabel htmlFor="validationTooltip05">Capactly</CFormLabel>
          <CFormInput type="number" id="validationTooltip05" required />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
        <CCol md={3} className="position-relative">
          <CFormLabel htmlFor="validationTooltip06">Price</CFormLabel>
          <CFormInput type="number" id="validationTooltip06" required />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
        <CCol md={2} className="position-relative">
          <CFormLabel htmlFor="validationTooltip04">Status</CFormLabel>
          <CFormSelect id="validationTooltip04" required>
            <option>Rejected</option>
            <option>Acceopted</option>
          </CFormSelect>
          <CFormFeedback tooltip invalid>
            Please provide a valid city.
          </CFormFeedback>
        </CCol>

        <CCol xs={12} className="position-relative">
          <CButton color="success" type="submit">
            Update
          </CButton>
        </CCol>
      </CForm>
      <div className="back mt-2">
        <CButton onClick={handleClickBack} color="primary" type="submit">
          Back
        </CButton>
      </div>
    </>
  );
};

export default EditBooking;
