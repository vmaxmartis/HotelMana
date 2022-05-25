import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
  } from "@coreui/react";
  import { useState } from "react";
  import React from "react";
  import { cilDelete } from "@coreui/icons";
  import CIcon from "@coreui/icons-react";
  import { DeleteDataRoomType } from "src/Utils/store/action/roomAction";
  import { useDispatch } from "react-redux";
  import PropTypes from "prop-types";
  
  const PopupDelete = (props) => {
    const [visible, setVisible] = useState(false);
    const { roomTypeId } = props;
  
    const dispatch = useDispatch();
  
    const handleClickDelSer = (e) => {
      e.preventDefault();
      if (roomTypeId && roomTypeId !== "") {
        dispatch(DeleteDataRoomType(roomTypeId));
        setVisible(false);
      }
    };
    return (
      <>
        <CButton
          color="danger"
          variant="outline"
          onClick={() => setVisible(!visible)}
        >
          <CIcon icon={cilDelete} size="sm" /> Delete
        </CButton>
        <CModal  visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Delete</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to delete?</CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="danger" type="submit" onClick={handleClickDelSer}>
              Yes
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };
  
  PopupDelete.propTypes = {
    roomTypeId: PropTypes.node,
  };
  
  export default PopupDelete;
  