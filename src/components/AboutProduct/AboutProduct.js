import React from "react";
import "../AboutProduct/AboutProduct.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlineStar,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BiCut } from "react-icons/bi";

const AboutProduct = () => {
  return (
    <div className="about-product">
      <img src="/images/circle-b.png" className="circle-b" alt="circle-img" />
      <img src="/images/circle-a.webp" className="circle-a" alt="circle-img" />
      <div className="container">
        <div className="back-page">
          <IoIosArrowRoundBack className="back-icon" />
          <span className="back-text">Back to category</span>
        </div>
        <div className="product-info">
          <div className="left">
            <div className="text-wishlist">
              <span class="slide-label">Samsung</span>
              <span class="wishlist">
                <AiOutlineHeart className="icon-heart" />
                <span>Add to wishlist</span>
              </span>
            </div>
            <div className="common-heading">
              <div className="review-stars">
                <div className="stars">
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                  (0)
                </div>
                <div className="review">
                  <BsPencil className="review-icon" />
                  <span className="review-text">Write a Review</span>
                </div>
              </div>
              <h2 className="info-title">Alien ware Monitor T 46</h2>
              <ul class="pro-number">
                <li>TYPE: Monitors</li>

                <li>
                  <span className="element">SKU:</span>
                  <span class="sku">1120550231151</span>
                </li>

                <li>
                  <BiCut className="cut-icon" />
                  <span className="text">See Sizing Guide</span>
                </li>
              </ul>
              <p className="info-description">
                Exceptional Full HD IPS 21.5 Inch Ultra Thin Display : Enjoy
                immaculate image quality with 1920x1080 resolution and 178
                degree wide viewing angles I Zero...
              </p>
            </div>
            <div class="product-select">
              <div class="pro-labl">Size:</div>
              <select class="selected">
                <option>32 Inches</option>
                <option>28 Inches</option>
              </select>
            </div>
            <div className="product-content-bottom">
              <div className="price">
                <span className="number">850.00</span>
                <span className="currency-type">USD</span>
              </div>
              <div className="quantity-select">
                <span className="lbl">Quantity :</span>
                <div className="quantity">
                  <button className="quantity-btn">
                    <AiOutlineMinus className="count-icon" />
                  </button>
                  <span className="count-number">1</span>
                  <button className="quantity-btn">
                    <AiOutlinePlus className="count-icon" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-btns">
              <button className="btn">Add to Cart</button>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
