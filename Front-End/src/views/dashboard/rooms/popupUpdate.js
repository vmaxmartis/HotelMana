import React, { useState } from "react";
import {
  CForm,
  CModalFooter,
  CFormSelect,
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CCol,
  CFormLabel,
  CFormInput,
} from "@coreui/react";

import { useDispatch, connect, useSelector } from "react-redux";
import { UpdateDataRoom } from "src/Utils/store/action/roomAction";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const PopupUpdate = (props) => {
  const dataType = useSelector((state) => state.room.typeRoom);

  const { nameRoom, typeRoom, roomId } = props;
  const [visibleLg, setVisibleLg] = useState(false);

  const [name, setNameRoom] = useState(nameRoom);
  const [roomTypeId, setTypeRoom] = useState(typeRoom);

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
    dispatch(UpdateDataRoom(roomId, data));
    reset({ ...data });
    setVisibleLg(false);
  };

  return (
    <>
      <CButton
        shape="rounded"
        color="info"
        variant="outline"
        size="sm"
        onClick={() => setVisibleLg(!visibleLg)}
      >
        Update
      </CButton>

      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Update Rooms</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-6 needs-validation"
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip01">Name</CFormLabel>
              <CFormInput
                size="lg"
                type="text"
                id="validationTooltip01"
                placeholder="Name"
                value={name}
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z0-9 ]+$/i,
                })}
                onChange={(e) => setNameRoom(e.target.value)}
                required
              />
              {errors.name?.type === "required" && (
                <p className="text-danger mt-2">Name Room is required</p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="text-danger mt-2">
                  {" "}
                  Name Room does not contain special characters
                </p>
              )}
            </CCol>
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">
                Choose TypeRoom
              </CFormLabel>
              <CFormSelect
                color="success"
                size="lg"
                className="mb-3"
                aria-label="Large select example"
                {...register("roomTypeId", { required: true })}
                onChange={(e) => setTypeRoom(e.target.value)}
              >
                {/* <option>Please choose type room</option> */}
                {dataType.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.type}
                    </option>
                  );
                })}
              </CFormSelect>
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
  roomId: PropTypes.node,
  nameRoom: PropTypes.node,
  typeRoom: PropTypes.node,
};
connect(
  ({ name, roomTypeId }) => ({
    name,
    roomTypeId,
  }),
  UpdateDataRoom
)(PopupUpdate);
export default PopupUpdate;
