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

const PopupDelete = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton color="danger" onClick={() => setVisible(!visible)}>
        <CIcon icon={cilDelete} size="lg" />
      </CButton>
      <CModal size="lg" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger">Yes</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default PopupDelete;
