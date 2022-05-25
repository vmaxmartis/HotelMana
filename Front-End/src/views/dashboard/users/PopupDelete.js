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
import { DeleteDataUser } from "src/Utils/store/action/userAction";
import { useDispatch } from "react-redux";
import { cilDelete } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const PopupDelete = (props) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const { userId } = props;
  const handleDeleteUser = () => {
    if (userId && userId !== null) {
      dispatch(DeleteDataUser(userId));
      // window.location.reload();
      setVisible(false);
    }
  };

  return (
    <>
      <CButton
        color="danger"
        shape="rounded"
        variant="outline"
        onClick={() => setVisible(!visible)}
      >
        <CIcon icon={cilDelete} size="sm" /> Delete
      </CButton>
      <CModal size="lg" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" onClick={handleDeleteUser}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

PopupDelete.propTypes = {
  userId: PropTypes.node,
};

export default PopupDelete;
