import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import PropTypes from "prop-types";
import { DeleteDataHotel } from "src/Utils/store/action/hotelAction";
import { useDispatch } from "react-redux";

const PopupDelete = (props) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const { hotelId } = props;
  const handleDeleteHotel = () => {
    if (hotelId && hotelId !== null) {
      dispatch(DeleteDataHotel(hotelId));
      setVisible(false);
      //   window.location.reload();
    }
  };

  return (
    <>
      <CButton variant="outline" color="danger" onClick={() => setVisible(!visible)}>
        Delete
      </CButton>
      <CModal  visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Hotel User</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" onClick={handleDeleteHotel}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

PopupDelete.propTypes = {
  hotelId: PropTypes.node,
};

export default PopupDelete;
