import React, { useState } from "react";
import defaultImg from "../../assets/images/react.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BtnBookings from "./btnBooking";
import {
  FetchDataRoom,
  FetchDataTypeRoom,
} from "src/Utils/store/action/roomAction";

import ReactPaginate from "react-paginate";

export default function RoomList() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.room.rooms);

  useEffect(() => {
    dispatch(FetchDataRoom());
  }, [dispatch]);

  const dataType = useSelector((state) => state.room.typeRoom);

  useEffect(() => {
    dispatch(FetchDataTypeRoom());
  }, [dispatch]);

  // const dataSort = data.sort(function (a, b) {
  //   return a.status - b.status;
  // });

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const displayRooms = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <div key={item.id}>
          <article className="room">
            <div className="img-container">
              <img src={defaultImg} alt="single room" />
              <div className="price-top">
                {dataType.map((type) => {
                  return (
                    <div key={type.id}>
                      <h2>{type.id == item.roomTypeId ? type.type : []}</h2>
                      <h3 className="mt-2"></h3>
                    </div>
                  );
                })}
              </div>
              <div>
                {" "} <BtnBookings

                  id={item.id}
                  name={item.name}
                  status={item.status}
                  typeRoom={item.roomTypeId}
                />

                
              </div>
            </div>
            <div>
            <h4 className="room-infox">{item.name}</h4>

            </div>
            {/* <h6 >{item.name}</h6> */}
          </article>
        </div>
      );
    });

  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <section className="roomslist">
        <div className="roomslist-center">{displayRooms}</div>
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
      </section>
    </>
  );
}
