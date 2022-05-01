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
import { DeleteDataService } from "src/Utils/store/action/serviceAction";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const PopupDelete = (props) => {
  const [visible, setVisible] = useState(false);
  const { serviceId } = props;

  const dispatch = useDispatch();

  const handleClickDelSer = (e) => {
    e.preventDefault();
    if (serviceId && serviceId !== "") {
      dispatch(DeleteDataService(serviceId));
      setVisible(false);
    }
  };
  return (
    <>
      <CButton size="sm" color="danger" variant="outline" onClick={() => setVisible(!visible)}>
        <CIcon icon={cilDelete} size="sm" /> Delete
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
          <CButton color="danger" type="submit" onClick={handleClickDelSer}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

PopupDelete.propTypes = {
  serviceId: PropTypes.node,
};

export default PopupDelete;
