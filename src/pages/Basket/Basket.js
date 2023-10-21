import React from "react";
import "./Basket.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem/BasketItem";

const Basket = () => {
  const basketProducts = useSelector((state) => state.basket.basketProducts);

  const total = basketProducts
    ?.map((pr) => {
      return pr?.count * pr?.pricesInUSD?.price;
    })
    ?.reduce((a, b) => a + b);

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
                  {basketProducts?.map((product) => (
                    <BasketItem key={product?.id} product={product} />
                  ))}
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
                    <span className="price">{total} </span>
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
