import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
} from "@coreui/react";
import PopupDelete from "./PopupDelete";
import PopupUpdate from "./PopupUpdate";
import PopupAdd from "./PopupAdd";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataService } from "src/Utils/store/action/serviceAction";
import ReactPaginate from "react-paginate";

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataService());
  }, [dispatch]);

  const data = useSelector((state) => state.service.services);
  console.log(data);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const displayService = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <CTableRow key={item.id}>
          <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
          <CTableDataCell>{item.price} VND</CTableDataCell>
          <CTableDataCell className="text-center">
            <PopupUpdate
              serviceId={item?.id}
              nameSer={item?.name}
              priceSer={item?.price}
              HotelId={item?.hotelId}
            />{" "}
            <PopupDelete serviceId={item?.id} />
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
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              {" "}
              <PopupAdd />{" "}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{displayService}</CTableBody>
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
};

export default Services;
