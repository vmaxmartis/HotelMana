import React from "react";
import RoomsList from "./RoomList";


function RoomContainer() {
  return (
    <>
      <section className="ftco-section ftco-no-pb ftco-room">
        <div className="container-fluid px-2">
          <div className="row no-gutters justify-content-center mb-9 pb-10">
            <div className="col-md-200 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">BtnBookings Rooms</span>
              <h2 className="mb-90 heading">Hotel Masters Rooms</h2>
            </div>
          </div>
           <RoomsList />
        </div>
      </section>
    </>
  );
}

export default RoomContainer;
