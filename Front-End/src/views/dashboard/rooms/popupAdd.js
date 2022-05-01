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
  CFormSelect,
} from "@coreui/react";
import { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, connect } from "react-redux";
import { AddDataRoom } from "src/Utils/store/action/roomAction";
import { useForm } from "react-hook-form";
import { FetchDataRoom } from "src/Utils/store/action/roomAction";
import { useEffect } from "react";
import { FetchDataTypeRoom } from "src/Utils/store/action/roomAction";
import { useSelector } from "react-redux";

const PopupAdd = () => {
  const [visibleLg, setVisibleLg] = useState(false);
  const [name, setNameRoom] = useState("");
  const [roomTypeId, setTypeRoom] = useState("");
  // const [hotelId, setHotelId] = useState("");

  const dispatch = useDispatch();

  const dataType = useSelector((state) => state.room.typeRoom);

  useEffect(() => {
    dispatch(FetchDataTypeRoom());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    dispatch(AddDataRoom(data));

    setVisibleLg(false);
  };

  return (
    <>
      <CButton
        color="success"
        shape="rounded-bottom"
        variant="outline"
        size="sm"
        onClick={() => setVisibleLg(!visibleLg)}
      >
        CREATE
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Add Rooms</CModalTitle>
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
              <CFormLabel htmlFor="validationTooltip02">Type</CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                {...register("roomTypeId", { required: true })}
                onChange={(e) => setTypeRoom(e.target.value)}
              >
                {dataType &&
                  dataType.map((item) => {
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
  ({ name, roomTypeId }) => ({
    name,
    roomTypeId,
  }),
  AddDataRoom
)(PopupAdd);
export default PopupAdd;
