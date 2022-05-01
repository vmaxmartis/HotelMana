import React, { useEffect, useState } from "react";
import PopupUpdate from "./PopupUpdate";

import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
} from "@coreui/react";
import PopupDelete from "./PopupDelete";
import PopupAdd from "./PopupAdd";
import { useDispatch, useSelector, connect } from "react-redux";
import { FetchDataUser } from "src/Utils/store/action/userAction";
import { LoadListRole } from "src/Utils/store/action/userAction";
import { formatDate } from "../../../Utils/DateTme/dateTime";
import ReactPaginate from "react-paginate";

function User() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user.users);
  const dataRole = useSelector((state) => state.user.roles);

  useEffect(() => {
    dispatch(FetchDataUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(LoadListRole());
  }, []);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, inx) => {
      return (
        <CTableRow key={item.id}>
          <CTableHeaderCell scope="row">{inx + 1}</CTableHeaderCell>
          <CTableDataCell>{item.username}</CTableDataCell>
          <CTableDataCell>{item.password}</CTableDataCell>
          <CTableDataCell>{item.fullName}</CTableDataCell>
          <CTableDataCell>{formatDate(item.birtDate)}</CTableDataCell>
          <CTableDataCell>{item.adress}</CTableDataCell>
          <CTableDataCell>{item.phone}</CTableDataCell>
          <CTableDataCell>
            {dataRole.map((role) => {
              return (
                <p key={role.id}>{role.id == item.roleId ? role.name : []}</p>
              );
            })}
          </CTableDataCell>

          <CTableDataCell className="text-center">

            <PopupUpdate
              userId={item?.id}
              nameUser={item?.username}
              Password={item?.password}
              FullName={item?.fullName}
              BirtDate={item?.birtDate}
              Adress={item?.adress}
              Phone={item?.phone}
              RoleId={item?.roleId}
              HotelId={item?.hotelId}
            />{" "}
            <PopupDelete userId={item?.id} />
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
            <CTableHeaderCell scope="col">User name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Password</CTableHeaderCell>
            <CTableHeaderCell scope="col">Full name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Birthday</CTableHeaderCell>
            <CTableHeaderCell scope="col">Address </CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone </CTableHeaderCell>
            <CTableHeaderCell scope="col">Role </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              <PopupAdd />{" "}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{displayUsers}</CTableBody>
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

export default User;
