import React from "react";
import "../GamingProducts/GamingProducts.scss";
import { BsController } from "react-icons/bs";
import ProductCard from "../ProductCard/ProductCard";

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
              More powerful hardware not only betters their experiences in games
              they're currently playing, but it also gives many players access
              to titles with more demanding specifications.
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
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingProducts;
