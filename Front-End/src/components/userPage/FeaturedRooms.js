import React from "react";
import Title from "./Title";
import img1 from "../../images/room-8.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FetchDataRoom } from "src/Utils/store/action/roomAction";

const FeaturedRooms = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.room.rooms);

  useEffect(() => {
    dispatch(FetchDataRoom());
  }, [dispatch]);

  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {data &&
          data.slice(0, 3).map((item) => {
            return (
              <article className="room" key={item.id}>
                <div className="img-container">
                  <img src={img1} alt="single room" />
                  <div className="price-top">
                    <h6>{item.price}</h6>
                    <p>{item.status}</p>
                  </div>
                  <a
                    className="btn-primary room-link"
                    href="/rooms/double-deluxe"
                  >
                    features
                  </a>
                </div>
                <p className="room-info">{item.name}</p>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default FeaturedRooms;
