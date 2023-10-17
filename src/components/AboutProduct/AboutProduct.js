import React, { useState, useEffect } from "react";
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

const AboutProduct = ({ item }) => {
  const selectColorOrSize = () => {
    let obj = {
      label: "",
      options: [],
      list: [],
      naming: "",
    };
    if (item?.sizes) {
      obj.label = "Size:";
      obj.options = item?.sizes?.map((s) => s?.size);
      obj.list = item?.sizes;
      obj.naming = "size";
    } else if (item?.colors) {
      obj.label = "Color:";
      obj.options = item?.colors?.map((c) => c?.color);
      obj.list = item?.colors;
      obj.naming = "color";
    }
    return obj;
  };

  const colorOrSizeObj = selectColorOrSize();
  const [selectedObj, setSelectedObj] = useState();

  useEffect(() => {
    setSelectedObj(colorOrSizeObj.list?.[0]);
  }, [colorOrSizeObj.list]);

  const [src, setSrc] = useState(
    `/images/products/${item?.routeName}/${colorOrSizeObj.list?.[0]?.image}`
  );
  useEffect(() => {
    setSrc(`/images/products/${item?.routeName}/${selectedObj?.image}`);
  }, [item?.routeName, selectedObj?.image]);

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
              <h2 className="info-title">{item?.productName}</h2>
              <ul class="pro-number">
                <li>TYPE: {item?.productType}</li>

                <li>
                  <span className="element">SKU:</span>
                  <span class="sku">{item?.sku}</span>
                </li>

                <li>
                  <BiCut className="cut-icon" />
                  <span className="text">See Sizing Guide</span>
                </li>
              </ul>
              <p className="info-description">{item?.description}</p>
            </div>
            <div class="product-select">
              <div class="pro-labl">{colorOrSizeObj.label}</div>
              <select
                className="selected"
                onChange={(e) => {
                  e.stopPropagation();
                  const found = colorOrSizeObj.list?.find(
                    (c) => c?.[colorOrSizeObj.naming] === e.target.value
                  );
                  if (found) {
                    setSelectedObj(found);
                  }
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {colorOrSizeObj.options.map((op) => (
                  <option data-val={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
            </div>
            <div className="product-content-bottom">
              <div className="price">
                <span className="number">
                  {selectedObj?.pricesInUSD?.price}
                </span>
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
              <button className="btn">Buy it now</button>
            </div>
          </div>
          <div className="right">
            <div className="img">
              <img src={src} alt="testimonials-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
