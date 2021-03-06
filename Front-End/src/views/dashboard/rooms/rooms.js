import React, { useState } from "react";
import "./room.scss";
import "../../../scss/style.scss";
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CBadge,
} from "@coreui/react";
import img1 from "../../../assets/images/react.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FetchDataRoom,
  FetchDataTypeRoom,
} from "src/Utils/store/action/roomAction";
import PopupAdd from "./popupAdd";
import PopupUpdate from "./popupUpdate";
import PopupDelete from "./popupDelete";
import ReactPaginate from "react-paginate";

export default function Rooms() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataRoom());
  }, [dispatch]);

  const data = useSelector((state) => state.room.rooms);

  useEffect(() => {
    dispatch(FetchDataTypeRoom());
  }, [dispatch]);
  const dataType = useSelector((state) => state.room.typeRoom);

  const dataSort =
    data.sort(function (a, b) {
      return a.status - b.status;
    }) || {};

  useEffect(() => {
    dispatch(FetchDataRoom());
  }, [dispatch]);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 11;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = dataSort
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <>
          <CCol >
            <CCard className="h-100" key={item.id}>
              <div className="half right-arrow d-flex align-items-center">
                <div className="text p-5 text-center">
                  <h3 className="mb-6">
                    <a href="rooms.html"> {item.name}</a>
                  </h3>
                  {dataType.map((type) => {
                    return (
                      <div className="mb-1" key={type.id}>
                        {type.id === item.roomTypeId ? type.type : []}{" "}
                        <span className="Title">
                          {type.id === item.roomTypeId ? `${type.price}đ` : []}{" "}
                        </span>
                      </div>
                    );
                  })}

                  <span className="per">per night</span>

                  <div className="d-grid gap-2  mx-auto">
                    <PopupUpdate
                      roomId={item?.id}
                      nameRoom={item?.name}
                      typeRoom={item?.roomType}
                    />
                    <PopupDelete roomId={item?.id} nameRoom={item?.name} />
                  </div>
                </div>
              </div>
            </CCard>
          </CCol>
        </>
      );
    });

  const pageCount = Math.ceil(dataSort.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <CRow xs={{ cols: 2 }} md={{ cols: 4 }} className="g-4">
        <CCol >
          <CCard className="h-100">
            <CCardImage orientation="top" src={img1} />
            <CCardBody>
              <h1 className="Title">CREATE NEW ROOM</h1>
            </CCardBody>
            <CCardBody className="d-grid gap-2">
              <PopupAdd />
            </CCardBody>
          </CCard>
        </CCol>
        {displayUsers}
      </CRow>
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
      {/* <PaginatedItems items={dataSort} itemsPerPage={4} /> */}
    </>
  );
}
