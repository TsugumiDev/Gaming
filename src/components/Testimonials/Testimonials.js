import React from "react";
import "../Testimonials/Testimonials.scss";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="section-top">
          <div class="section-title-left">
            <h2>Testimonials</h2>
          </div>
          <div class="section-title-right">
            <p>
              A video game console is an electronic device that outputs a video
              signal or image to display a video game that can be played with a
              game controller.
            </p>
          </div>
        </div>
        <div className="testimonials-swiper">
          <div className="testimonials-element">
            <figure>
              <img src="/images/testi-2.webp" alt="testimonials-img" />
            </figure>
            <div className="testimonials-content">
              <h3 className="testimonial-title">One Level Time!</h3>
              <p>
                I also love the challenge of trying to beat a difficult game or
                master a new skill. Gaming has taught me a lot about
                perseverance and determination, and it's helped me to develop my
                problem-solving skills.
              </p>
              <div className="testimonials-bottom">
                <div class="testi-pro-info">
                  <figure class="pro-img">
                    <img
                      src="/images/client-img.png"
                      class="client-img"
                      alt="client-image"
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
