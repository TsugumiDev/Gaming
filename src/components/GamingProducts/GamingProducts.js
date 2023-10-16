import React, { useState } from "react";
import "../GamingProducts/GamingProducts.scss";
import { BsController } from "react-icons/bs";
import ProductCard from "../ProductCard/ProductCard";
import { data } from "../../data";
import BlogCard from "../BlogCard/BlogCard";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const GamingProducts = () => {
  return (
    <div className="gaming-products">
      <div className="container">
        <div className="section-top">
          <div class="section-title-left">
            <h2>Best Pro Gaming Products</h2>
          </div>
          <div class="section-title-center">
            <p>
              With hardware, tools are what enable a person to install, remove,
              or perform other actions on the components within their computer.
            </p>
          </div>
          <div class="section-title-right">
            <span class="btn">
              <span className="text">Show Products</span>
              <BsController className="controller-icon" />
            </span>
          </div>
        </div>
        <div className="product-swiper">
          <div className="product-items">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {/* {Object.keys(data.products).map((category) => (
                <div key={category}>
                  {data.products[category].map((product) => (
                    <SwiperSlide>
                      <BlogCard key={product.id} item={product} />
                    </SwiperSlide>
                  ))}
                </div>
              ))} */}
              {data.blog.map((b) => (
                <SwiperSlide>
                  <BlogCard key={b.id} item={b} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingProducts;
