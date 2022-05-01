import React, { useEffect } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import { FetchDataService } from "src/Utils/store/action/serviceAction";

import { MdRedeem } from "react-icons/md";

const Services = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.service.services);

  useEffect(() => {
    dispatch(FetchDataService());
  }, []);

  return (
    <section className="services">
      <div className="section-title">
        <h4>Services</h4>
      </div>
      <div className="services-center">
        {data.map((item) => {
          return (
            <article key={`item-${item.name}`} className="service">
              <span>
                <MdRedeem />
              </span>
              <h6>{item.name}</h6>
              <p>{item.price} VND</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
