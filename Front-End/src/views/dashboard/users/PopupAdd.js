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
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector, connect } from "react-redux";
import { AddDataUser } from "src/Utils/store/action/userAction";
import { useForm } from "react-hook-form";
import { formatDate } from "../../../Utils/DateTme/dateTime";
import { cilReload } from "@coreui/icons";

const PopupAdd = () => {
  const [validated, setValidated] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [birtDate, setBirthday] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [roleId, setRoleId] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.roles);

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
    if (data) {
      dispatch(AddDataUser(data));
    }
    setVisibleLg(false);
  };
  const handleReset = () => {
    reset({});
    setUserName("");
    setPassword("");
    setFullName("");
    setBirthday("");
    setAdress("");
    setPhone("");
    setRoleId("");
    setVisibleLg(false);
  };

  return (
    <>
      <CButton color="success" onClick={() => setVisibleLg(!visibleLg)}>
        <VscAdd size={15} /> Add
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={handleReset}>
        <CModalHeader>
          <CModalTitle>Add Users</CModalTitle>
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
                type="password"
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
                placeholder="Birthday"
                value={birtDate}
                {...register("birtDate", { required: true })}
                onChange={(e) => setBirthday(e.target.value)}
              />
              {errors.username?.type === "required" && (
                <p className="text-danger mt-2">birtDate is required</p>
              )}
            </CCol>
            <CCol md={7} className="position-relative">
              <CFormLabel htmlFor="validationTooltip05">Adress</CFormLabel>
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
  ({ username, password, fullName, phone, birtDate, roleId, adress }) => ({
    username,
    password,
    fullName,
    phone,
    birtDate,
    roleId,
    adress,
  }),
  AddDataUser
)(PopupAdd);

export default PopupAdd;
