import React from "react";
import { Link } from "react-router-dom";
import Rooms from "./rooms/rooms";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";

function Dashboard() {
  return (
    <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4 ">
      <CCol xs>
        <CCard className="h-100" style={{ backgroundColor: "#3399ff" }}>
          <CCardBody>
            <CCardTitle>Room</CCardTitle>
            <CButton href="/admin/room" color="light">
              Go Room
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100" style={{ backgroundColor: "#f9b115" }}>
          <CCardBody>
            <CCardTitle>User</CCardTitle>
            <CButton color="light" href="/admin/user">
              Go User
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100" style={{ backgroundColor: "#2eb85c" }}>
          <CCardBody>
            <CCardTitle>Bookings</CCardTitle>
            <CButton color="light" href="/admin/bookings">
              Go Bookings
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100" style={{ backgroundColor: "#e55353" }}>
          <CCardBody>
            <CCardTitle>Services</CCardTitle>
            <CButton color="light" href="/admin/services">
              Go Services
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Dashboard;
