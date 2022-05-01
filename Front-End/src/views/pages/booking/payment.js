import React from "react";

import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CRow,

  CTableDataCell,
  CTableRow,
  CTableBody,
  CTable,
} from "@coreui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { CreateBill, FetchDataBill } from "src/Utils/store/action/billAction";

import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { VscCreditCard } from "react-icons/vsc";
import { formatDate } from "../../../Utils/DateTme/dateTime";

import {
  FetchDataTypeRoom,
  FetchDataRoom,
} from "../../../Utils/store/action/roomAction";
import { differenceInDays, format } from "date-fns";

const PopupPayment = (props) => {
  const {
    roomId,
    idBookRoom,
    customerName,
    customerIdCard,
    roomName,
    fromDate,
    toDate,
  } = props;
  const [visibleLg, setVisibleLg] = useState(false);
  // const data = useSelector((state) => state.id);
  const [bookRoomId, setbookRoomId] = useState("");

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      dispatch(CreateBill(data));
    }
    setVisibleLg(false);
  };

  const dispatch = useDispatch();

  const dataBill = useSelector((state) => state.bill.bills) || {}; // fetch data room

  console.log("databill", dataBill);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  var result = differenceInDays(new Date(toDate), new Date(fromDate));

  const handleClickShowInfor = () => {
    if (idBookRoom) {
      dispatch(FetchDataBill(idBookRoom));
    }
    setVisibleLg(!visibleLg);
  };
  return (
    <>
      <CButton
        size="sm"
        color="success"
        variant="outline"
        shape="rounded-pill"

        onClick={handleClickShowInfor}
      >
        Payment <VscCreditCard size={15} />
      </CButton>
      <CModal visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>
            Payment for{" "}
            {dataBill &&
              dataBill.inforBookroom &&
              dataBill.inforBookroom.customerName}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={12} color="success" className="position-relative">
              <CFormInput
                type="hidden"
                value={idBookRoom}
                id="validationTooltip01"
                onChange={(e) => setbookRoomId(e.target.value)}
                {...register("bookRoomId", {
                  required: true,
                })}
                placeholder="Name"
                required
              />
            </CCol>

            {dataBill && dataBill.inforBookroom && (
              <CRow className="g-3 m-3">
                <div>
                <CTable bordered>
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        ID CARD
                      </CTableDataCell>
                      <CTableDataCell>
                        {dataBill.inforBookroom.customerIdCard}
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Room Name
                      </CTableDataCell>
                      <CTableDataCell>1231</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Checkin
                      </CTableDataCell>
                      <CTableDataCell>
                        {" "}
                        {formatDate(dataBill.inforBookroom.fromDate)}
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Checkout
                      </CTableDataCell>
                      <CTableDataCell>
                        {" "}
                        {formatDate(dataBill.inforBookroom.toDate)}
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Type
                      </CTableDataCell>
                      <CTableDataCell>
                        {" "}
                        {dataBill.inforBookroom.type}
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Price per day
                      </CTableDataCell>
                      <CTableDataCell>
                        {" "}
                        {dataBill.inforBookroom.price}  VNĐ
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Staff
                      </CTableDataCell>
                      <CTableDataCell>
                        {" "}
                        {dataBill.inforBookroom.name}
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Total
                      </CTableDataCell>
                      <CTableDataCell style={{ backgroundColor: "#819FF7" }} >{dataBill.totalBill} VNĐ</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                </div>
              </CRow>
            )}

            <CModalFooter>
              <CButton
                size="sm"
                shape="rounded-pill"
                variant="ghost"
                color="secondary"
                onClick={() => setVisibleLg(false)}
              >
                Cancel
              </CButton>
              <CButton
                size="lg"
                color="success"
                type="submit"
                shape="rounded-pill"
                variant="outline"
              >
                Payment
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};

connect(
  ({ bookRoomId }) => ({
    bookRoomId,
  }),
  CreateBill
)(PopupPayment);
PopupPayment.propTypes = {
  idBookRoom: PropTypes.node,
  customerName: PropTypes.node,
  customerIdCard: PropTypes.node,
  fromDate: PropTypes.node,
  toDate: PropTypes.node,
  roomName: PropTypes.node,
  roomId: PropTypes.node,

};
export default PopupPayment;
