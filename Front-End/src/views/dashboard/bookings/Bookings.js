  import React, { useState } from "react";
  import {
    CTable,
    CTableBody,
    CTableRow,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
  } from "@coreui/react";
  import { FetchDataBookRoom } from "src/Utils/store/action/bookroomAction";
  import CIcon from "@coreui/icons-react";
  import {
    cilCloudUpload,
    cilDelete,
    cilList,
    cilShieldAlt,
  } from "@coreui/icons";

  import { Link } from "react-router-dom";
  import PopupDelete from "./PopupDelete";
  import PopupUpdate from "./PopupUpdate";

  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from "react";
  import { formatDate } from "src/Utils/DateTme/dateTime";
  import ReactPaginate from "react-paginate";

  function Bookings() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.bookroom.bookrooms);

    useEffect(() => {
      dispatch(FetchDataBookRoom());
    }, [dispatch]);

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const displayBookings = data
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((item, inx) => {
        return (
          <CTableRow key={item.id}>
            <CTableHeaderCell scope="row">{inx + 1}</CTableHeaderCell>
            <CTableDataCell>{item.customerName}</CTableDataCell>
            <CTableDataCell>{item.customerIdCard}</CTableDataCell>
            <CTableDataCell>{formatDate(item.fromDate)}</CTableDataCell>
            <CTableDataCell>{formatDate(item.toDate)}</CTableDataCell>
            <CTableDataCell>{item.roomName}</CTableDataCell>
            <CTableDataCell>
              {/* <PopupUpdate /> <PopupDelete /> */}
            </CTableDataCell>
          </CTableRow>
        );
      });

    const pageCount = Math.ceil(data.length / usersPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
      <>
        <CTable responsive striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Customer Id Card</CTableHeaderCell>
              <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Room Name</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>{displayBookings}</CTableBody>
        </CTable>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={changePage}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  export default Bookings;
