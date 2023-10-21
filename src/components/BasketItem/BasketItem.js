import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addToBasketAction } from "../../store/actions/actions";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.basketProducts);
  const foundProduct = basketProducts?.find((pr) => pr.id === product?.id);

  const label = product?.color ? "Color: " : "Size: ";
  const total = product?.count * product?.pricesInUSD?.price;

  const increaseProductCount = () => {
    const obj = {
      ...foundProduct,
      count: foundProduct?.count + 1,
    };
    const copy = basketProducts?.filter((it) => it?.id !== foundProduct?.id);
    copy?.unshift(obj);
    dispatch(addToBasketAction(copy));
  };

  return (
    <tr className="cart-item">
      <td className="cart-item-media">
        <img
          src={`/images/products/${product?.routeName}/${product?.image}`}
          alt="cart-img"
        />
      </td>
      <td className="name">
        <span class="cart-item__name">{product?.productName}</span>
        <div class="product-option">
          <span className="parameters">{label}</span>
          <div className="parameters-text">
            {product?.color || product?.size}
          </div>
        </div>
      </td>
      <td className="cart-price">
        <span className="price">{product?.pricesInUSD?.price} </span>
        <span class="currency-type">USD</span>
      </td>
      <td className="cart-item__quantity">
        <div className="counter">
          <button onClick={increaseProductCount}>
            <AiOutlinePlus />
          </button>
          <span>{product?.count}</span>
          <button onClick={() => null}>
            <AiOutlineMinus />
          </button>
        </div>
      </td>
      <td class="cart-item-totals">
        <div class="cart-item-price">
          <div class="price-end">
            <span className="total-price">{total} </span>
            <span class="currency-type">USD</span>
          </div>
          <div className="remove-btn">
            <RiDeleteBin6Line className="remove-icon" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BasketItem;
