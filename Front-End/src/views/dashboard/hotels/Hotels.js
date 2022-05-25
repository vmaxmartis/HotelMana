import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CSpinner,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { HotelFetchData } from "src/Utils/store/action/hotelAction";
import PopupAdd from "./PopupAdd";
import PopupDelete from "./PopupDelete";
import PopupUpdate from "./PopupUpdate";
import ReactPaginate from "react-paginate";

const Hotels = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HotelFetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.hotel.hotels);
  const pending = useSelector((state) => state.hotel.pending);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  const display = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, inx) => {
      return (
        <CTableRow key={item.id}>
          <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
          <CTableDataCell>{item.adress} </CTableDataCell>
          <CTableDataCell>{item.phone} </CTableDataCell>
          <CTableDataCell>{item.email} </CTableDataCell>
          <CTableDataCell className="text-center">
            <PopupUpdate
              hotelId={item?.id}
              nameHotel={item?.name}
              dressHotel={item?.adress}
              phoneHotel={item?.phone}
              emailHotel={item?.email}
            />{" "}
             <PopupDelete hotelId={item.id} /> 
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
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Address</CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              <PopupAdd />
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{display}</CTableBody>
      </CTable>
      <CTable responsive>
        <CTableHead>
          <CTableRow>
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
          </CTableRow>
        </CTableHead>
      </CTable>
    </>
  );
};

export default Hotels;
