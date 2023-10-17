import React from "react";
import "../Testimonials/Testimonials.scss";

const Testimonials = ({ item }) => {
  return (
    <div className="testimonials-element">
      <figure>
        <img src={`/images/${item?.img}`} alt="testimonials-img" />
      </figure>
      <div className="testimonials-content">
        <h3 className="testimonial-title">{item.title}</h3>
        <p>{item?.description}</p>
        <div className="testimonials-bottom">
          <div class="testi-pro-info">
            <figure class="pro-img">
              <img
                src="/images/client-img.png"
                class="client-img"
                alt="client"
              />
            </figure>
            <h6>
              <span className="name">Alex Thompson,</span>
              <span className="client">Client</span>
            </h6>
          </div>
          <div class="testi-star">
            <img src="/images/star.png" alt="star" />
            <span class="star-count">
              <b>4.5 </b> /5.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
