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
import {
    FetchDataTypeRoom,
  } from "src/Utils/store/action/roomAction";

const Services = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataTypeRoom());
  }, [dispatch]);

  const data = useSelector((state) => state.room.typeRoom);

  console.log(data);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const display = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <CTableRow key={item.id}>
          <CTableHeaderCell scope="row">{item.type}</CTableHeaderCell>
          <CTableDataCell>{item.price} VND</CTableDataCell>
          <CTableDataCell className="text-center">
             <PopupUpdate
              roomTypeId={item?.id}
              nameSer={item?.type}
              priceSer={item?.price}
            />{" "} 
            <PopupDelete roomTypeId={item?.id} /> 
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
            <CTableHeaderCell scope="col">Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              {" "}
               <PopupAdd />{" "}
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

export default Services;
