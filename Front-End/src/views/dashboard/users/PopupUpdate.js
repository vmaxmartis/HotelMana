import React from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CFormFeedback,
  CFormSelect,
} from "@coreui/react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { useDispatch, useSelector, connect } from "react-redux";
import { UpdateDataUser } from "src/Utils/store/action/userAction";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { formatDateInput } from "../../../Utils/DateTme/dateTime";

const PopupUpdate = (props) => {
  const [visibleLg, setVisibleLg] = useState(false);

  const {
    nameUser,
    Password,
    FullName,
    BirtDate,
    Adress,
    Phone,
    RoleId,
    userId,
  } = props;

  const [username, setUserName] = useState(nameUser);
  const [password, setPassword] = useState(Password);
  const [fullName, setFullName] = useState(FullName);
  const [birtDate, setBirthday] = useState(formatDateInput(BirtDate));
  const [adress, setAdress] = useState(Adress);
  const [phone, setPhone] = useState(Phone);
  const [roleId, setRoleId] = useState(RoleId);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.roles) || [];

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
    if (userId && data) {
      dispatch(UpdateDataUser(data, userId));
    }
    setVisibleLg(false);
  };

  return (
    <>
      <CButton
        shape="rounded"
        variant="outline"
        color="info"
        onClick={() => setVisibleLg(!visibleLg)}
      >
        <VscEdit size={15} /> Edit
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Update Users</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3"
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip01">User Name</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip01"
                placeholder="User Name"
                value={username}
                {...register("username", {
                  required: true,
                  pattern: /^[A-Za-z0-9]+$/i,
                })}
                onChange={(e) => setUserName(e.target.value)}
              />
              {errors.username?.type === "required" && (
                <p className="text-danger mt-2">UserName is required</p>
              )}
              {errors.username?.type === "pattern" && (
                <p className="text-danger mt-2">
                  {" "}
                  Username does not contain special characters
                </p>
              )}
            </CCol>
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Password</CFormLabel>
              <CFormInput
                type="upPassword"
                id="validationTooltip02"
                placeholder="Passwords"
                value={password}
                {...register("password", { required: true, minLength: 6 })}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password?.type === "minLength" && (
                <p className="text-danger mt-2">
                  Password must be 6 characters long
                </p>
              )}
              {errors.password?.type === "required" && (
                <p className="text-danger mt-2">Password is required</p>
              )}
            </CCol>
            <CCol md={7} className="position-relative">
              <CFormLabel htmlFor="validationTooltip03">Fullname</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip03"
                placeholder="Fullname"
                value={fullName}
                {...register("fullName", {
                  required: true,
                  maxLength: 24,
                  pattern: /^[A-Za-z0-9 ]+$/i,
                })}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName?.type === "required" && (
                <p className="text-danger mt-2">fullName is required</p>
              )}
              {errors.fullName?.type === "maxLength" && (
                <p className="text-danger mt-2">
                  FullName not than 24 characters long
                </p>
              )}
              {errors.fullName?.type === "pattern" && (
                <p className="text-danger mt-2">
                  FullName does not contain special characters
                </p>
              )}
            </CCol>
            <CCol md={5} className="position-relative">
              <CFormLabel htmlFor="validationTooltip04">Birthday</CFormLabel>
              <CFormInput
                type="date"
                id="validationTooltip04"
                placeholder="dd-mm-yyyy"
                value={birtDate}
                {...register("birtDate", { required: true })}
                onChange={(e) => setBirthday(e.target.value)}
              />
              {errors.birtDate?.type === "required" && (
                <p className="text-danger mt-2">birtDate is required</p>
              )}
            </CCol>
            <CCol md={7} className="position-relative">
              <CFormLabel htmlFor="validationTooltip05">Address</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip05"
                placeholder="Adress"
                value={adress}
                {...register("adress", { required: true })}
                onChange={(e) => setAdress(e.target.value)}
              />
              {errors.adress?.type === "required" && (
                <p className="text-danger mt-2">adress is required</p>
              )}
            </CCol>
            <CCol md={5} className="position-relative">
              <CFormLabel htmlFor="validationTooltip06">Phone</CFormLabel>
              <CFormInput
                type="number"
                id="validationTooltip06"
                placeholder="Phone"
                value={phone}
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone?.type === "required" && (
                <p className="text-danger mt-2">phone is required</p>
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
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip07">Roles</CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                {...register("roleId", { required: true })}
                onChange={(e) => setRoleId(e.target.value)}
              >
                {data &&
                  data.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </CFormSelect>
              {errors.roleId?.type === "required" && (
                <p className="text-danger mt-2">roleId is required</p>
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
  ({ username, password, fullName, phone, birtDate, roleId, adress }) => ({
    username,
    password,
    fullName,
    phone,
    birtDate,
    roleId,
    adress,
  }),
  UpdateDataUser
)(PopupUpdate);
PopupUpdate.propTypes = {
  userId: PropTypes.node,
  nameUser: PropTypes.node,
  Password: PropTypes.node,
  FullName: PropTypes.node,
  BirtDate: PropTypes.node,
  Adress: PropTypes.node,
  Phone: PropTypes.node,
  RoleId: PropTypes.node,
  HotelId: PropTypes.node,
};
export default PopupUpdate;
