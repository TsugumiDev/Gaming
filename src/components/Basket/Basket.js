import React from "react";
import "../Basket/Basket.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const Basket = () => {
  return (
    <div className="basket">
      <div className="container">
        <div className="section-top">
          <div className="btn-back">
            <IoIosArrowRoundBack className="back-icon" />
            <span className="back-text">Continue shopping</span>
          </div>
          <h2 className="cart-text">Your cart</h2>
        </div>
        <div className="section-contenet">
          <div className="left">
            <div className="cart-items">
              <table class="cart-tble">
                <thead>
                  <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cart-item">
                    <td className="cart-item-media">
                      <img src="/images/10.webp" alt="cart-img" />
                    </td>
                    <td className="name">
                      <span class="cart-item__name">
                        Alien ware Monitor T 46
                      </span>

                      <div class="product-option">
                        <span className="parameters">Size:</span>
                        <div className="parameters-text">32 Inches</div>
                      </div>
                    </td>
                    <td className="cart-price">
                      <span className="price">850.00 </span>
                      <span class="currency-type">USD</span>
                    </td>
                    <td className="cart-item__quantity">
                      <div className="counter">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td class="cart-item-totals">
                      <div class="cart-item-price">
                        <div class="price-end">
                          <span className="total-price">850.00 </span>
                          <span class="currency-type">USD</span>
                        </div>
                        <div className="remove-btn">
                          <RiDeleteBin6Line />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="right">
            <div className="right-top">
              <span className="order">Order special instructions</span>
              <textarea
                class="text-area"
                placeholder="Order special instructions"
              ></textarea>
            </div>
            <div className="right-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
