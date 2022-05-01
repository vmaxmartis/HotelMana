import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import React, { useState } from "react";
import { DeleteDataRoom } from "src/Utils/store/action/roomAction";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const PopupDelete = (props) => {
  const [visible, setVisible] = useState(false);
  const { roomId, nameRoom } = props;
  const [nameroom, setNameRoom] = useState(nameRoom);

  const dispatch = useDispatch();

  const handleClickDeleteRoom = (e) => {
    e.preventDefault();
    if (roomId && roomId !== "") {
      dispatch(DeleteDataRoom(roomId));
      setVisible(false);
    }
  };
  return (
    <>
      <CButton
        shape="rounded"
        color="danger"
        variant="outline"
        size="sm"
        onClick={() => setVisible(!visible)}
      > 

        Delete
      </CButton>
      <CModal size="lg" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Delete room</CModalTitle>
        </CModalHeader>
        <CModalBody> Are you sure you want to delete {nameroom} ?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" type="submit" onClick={handleClickDeleteRoom}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

PopupDelete.propTypes = {
  roomId: PropTypes.node,
  nameRoom: PropTypes.node,
};

export default PopupDelete;
