import React from "react";
import { useSelector } from "react-redux";
import "./Basket.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Basket = () => {
  const basketProducts = useSelector((state) => state.basket.basketProducts);

  // const getProductTotalCount = () => {
  //   let totalCount = 0;

  //   basketProducts?.forEach((item) => {
  //     totalCount += item?.count;
  //   });

  //   return totalCount;
  // };

  // const getDiscountTotal = () => {
  //   let totalDiscount = 0;

  //   basketProducts?.forEach((item) => {
  //     totalDiscount +=
  //       +item?.product?.discountAmount?.replace(" ₼", "") * item?.count;
  //   });

  //   return totalDiscount;
  // };

  // const getTotalPrice = () => {
  //   let totalPrice = 0;

  //   basketProducts?.forEach((item) => {
  //     totalPrice += +item?.product?.price?.replace(" ₼", "") * item?.count;
  //   });

  //   return +totalPrice?.toFixed(2);
  // };

  // const totalPrice = getTotalPrice();
  // const totalDiscount = getDiscountTotal();
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
              <table class="cart-table">
                <thead>
                  <tr>
                    <th className="img">IMAGE</th>
                    <th className="name">NAME</th>
                    <th className="price">PRICE</th>
                    <th className="quantiy">QUANTITY</th>
                    <th className="total">TOTAL</th>
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
                        <button>
                          <AiOutlinePlus />
                        </button>
                        <span>1</span>
                        <button>
                          <AiOutlineMinus />
                        </button>
                      </div>
                    </td>
                    <td class="cart-item-totals">
                      <div class="cart-item-price">
                        <div class="price-end">
                          <span className="total-price">850.00 </span>
                          <span class="currency-type">USD</span>
                        </div>
                        <div className="remove-btn">
                          <RiDeleteBin6Line className="remove-icon" />
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
            <div className="right-bottom">
              <div className="subtotal-content">
                <div class="totals">
                  <h3 class="totals-subtotal">Subtotal</h3>
                  <p class="totals-subtotal-value">
                    <span className="price">3,430.00 </span>
                    <span class="currency-type">USD</span>
                  </p>
                </div>
                <small class="tax-note">
                  Taxes and shipping calculated at checkout
                </small>
              </div>
              <div className="checkout">
                <button type="submit" class="checkout-btn">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
