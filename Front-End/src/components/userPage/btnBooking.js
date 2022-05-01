import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";
import { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useForm } from "react-hook-form";
import {
  AddDataBookRoom,
  UpdateDataBookRoom,
} from "src/Utils/store/action/bookroomAction";
import { FetchDataService } from "src/Utils/store/action/serviceAction";
import { differenceInDays, format } from "date-fns";

import {
  CButton,
  CFormInput,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModal,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CModalFooter,
  CForm,
  CFormSelect,
} from "@coreui/react";

import { PropTypes } from "prop-types";

const BtnBookings = (props) => {
  const [visibleXL, setVisibleXL] = useState(false);
  const [visibleXLD, setVisibleXLD] = useState(false);

  const { name, typeRoom, id, status } = props;

  const [customerName, setcustomerName] = useState("");
  const [customerIdCard, setcustomerIdCard] = useState("");
  const [roomId, setroomId] = useState(id);
  const [toDate, settoDate] = useState("");
  const [fromDate, setfromDate] = useState("");



  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.room.typeRoom) || [];
  const dataService = useSelector((state) => state.service.services) || [];

  // useEffect(() => {
  //   dispatch(FetchDataTypeRoom());
  // }, []);

  const datatypeRoom = dataType.find((item) => item.id === typeRoom) || {};

  // take data service
  useEffect(() => {
    dispatch(FetchDataService());
  }, []);

  // add
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      dispatch(AddDataBookRoom(data));
    }
    console.log("data", data);
    setVisibleXL(false);
  };

  var result = differenceInDays(new Date(toDate), new Date(fromDate));
  return (
    <>
      <CButton
        shape="rounded-pill"
        color="danger"
        size="lg"
        variant="outline"
        className="room-link"
        onClick={() => {
          setVisibleXL(!visibleXL);
        }}
      >
        Booking
      </CButton>
      <CModal visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle>Booking</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit(handleOnSubmit)}>
            <CRow className="g-3 mb-3">
              <CCol xs>
                <img
                  src={defaultImg}
                  width="470"
                  height="300"
                  alt="double economy"
                />
              </CCol>
              <CCol xs>
                  <CTable>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                          Room Type
                        </CTableDataCell>
                        <CTableDataCell>{datatypeRoom.type}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                          Price
                        </CTableDataCell>
                        <CTableDataCell>{datatypeRoom.price}</CTableDataCell>
                      </CTableRow>

                      <CTableRow>
                        <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                          Status
                        </CTableDataCell>
                        {status === 1 ? (
                          <CTableDataCell color="secondary">
                            {" "}
                            Active
                          </CTableDataCell>
                        ) : (
                          <CTableDataCell> Empty </CTableDataCell>
                        )}
                      </CTableRow>
                    </CTableBody>
                  </CTable>
              </CCol>
            </CRow>
            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="from-date" className=" mb-2">
                  Check in
                </label>
                <CFormInput
                  type="date"
                  id="validationTooltip04"
                  placeholder="fromDate"
                  value={fromDate}
                  {...register("fromDate", { required: true })}
                  onChange={(e) => setfromDate(e.target.value)}
                />
                {errors.customerIdCard?.type === "required" && (
                  <p className="text-danger mt-2">Check in is required</p>
                )}
              </CCol>
              <CCol xs>
                <label htmlFor="to-date" className=" mb-2">
                  Check out
                </label>
                <CFormInput
                  type="date"
                  id="validationTooltip04"
                  placeholder="toDate"
                  value={toDate}
                  {...register("toDate", { required: true })}
                  onChange={(e) => settoDate(e.target.value)}
                />
                {errors.customerIdCard?.type === "required" && (
                  <p className="text-danger mt-2">Check out is required</p>
                )}
              </CCol>
            </CRow>
            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="formGroupExampleInput1" className=" mb-2">
                  Full name
                </label>
                <CFormInput
                  type="text"
                  id="validationTooltip01"
                  placeholder="Full name "
                  value={customerName}
                  {...register("customerName", {
                    required: true,
                    pattern: /^[A-Za-z0-9 ]+$/i,
                  })}
                  onChange={(e) => setcustomerName(e.target.value)}
                />
                {errors.customerName?.type === "required" && (
                  <p className="text-danger mt-2">customerName is required</p>
                )}
                {errors.customerName?.type === "pattern" && (
                  <p className="text-danger mt-2">
                    FullName does not contain special characters
                  </p>
                )}
              </CCol>
              <CCol xs>
                <label htmlFor="formGroupExampleInput3" className=" mb-2">
                  ID CARD
                </label>
                <CFormInput
                  type="number"
                  id="validationTooltip06"
                  placeholder="ID Card"
                  value={customerIdCard}
                  {...register("customerIdCard", {
                    required: true,
                    minLength: 9,
                    maxLength: 12,
                  })}
                  onChange={(e) => setcustomerIdCard(e.target.value)}
                />
                {errors.customerIdCard?.type === "required" && (
                  <p className="text-danger mt-2">customerIdCard is required</p>
                )}
                {errors.customerIdCard?.type === "minLength" && (
                  <p className="text-danger mt-2">
                    {" "}
                    Number customerIdCard must be 10 number
                  </p>
                )}
                {errors.customerIdCard?.type === "maxLength" && (
                  <p className="text-danger mt-2">
                    {" "}
                    Number customerIdCard not than 10 number
                  </p>
                )}
              </CCol>
              <CCol md={12}>
                <CFormInput
                  type="hidden"
                  value={roomId}
                  {...register("roomId", {
                    required: true,
                  })}
                />
              </CCol>
            </CRow>

            <CRow className="g-3 m-3">
              <CCol xs>
                <p>Number of day: {result ? result : 0}</p>
              </CCol>
              <CCol xs>
                <p>Price per day: {`${datatypeRoom.price} VNĐ `}</p>
                <p>
                  Total Price to be said:{" "}
                  {result * datatypeRoom.price
                    ? result * datatypeRoom.price
                    : 0}{" "}
                  VNĐ
                </p>
              </CCol>
            </CRow>

            <CModalFooter>
              <CButton color="success" type="submit">
                Bookroom
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};
BtnBookings.propTypes = {
  id: PropTypes.node,
  name: PropTypes.node,
  typeRoom: PropTypes.node,
  status: PropTypes.node,
};
connect(
  ({ customerName, customerIdCard, roomId, fromDate, toDate }) => ({
    customerName,
    customerIdCard,
    roomId,
    fromDate,
    toDate,
  }),
  AddDataBookRoom
)(BtnBookings);

export default BtnBookings;
