import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import "../ProductCard/ProductCard.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

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
  const [selectedObj, setSelectedObj] = useState(colorOrSizeObj.list?.[0]);
  const [src, setSrc] = useState(
    `/images/products/${item?.routeName}/${colorOrSizeObj.list?.[0]?.image}`
  );

  const goToProductPage = () => {
    navigate(`/products/${item?.routeName}`);
  };

  useEffect(() => {
    setSrc(`/images/products/${item?.routeName}/${selectedObj?.image}`);
  }, [item?.routeName, selectedObj?.image]);

  console.log(src);
  console.log("11", item?.routeName, selectedObj?.image);

  return (
    <div className="product-card" onClick={goToProductPage}>
      <div className="element">
        <h4 class="product-title">{item?.productName}</h4>
        <ul class="product-number">
          <li>TYPE: {item?.type}</li>
        </ul>
        <figure className="product-image">
          <img src={src} alt={item?.productName} />
        </figure>
        <div className="product-info">
          <div className="top">
            <span>{colorOrSizeObj.label}</span>
            <select
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
          <div className="bottom-content">
            <div className="price-addtocart">
              <div class="price-item">
                <span className="price">{selectedObj?.pricesInUSD?.price}</span>
                <span class="currency-type">USD</span>
              </div>
              <div className="add-to-cart">
                <button type="submit" onClick={(e) => e.stopPropagation()}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pro_btn">
        <span className="icon">
          <AiOutlineHeart />
        </span>
        <span className="icon">
          <IoEyeOutline />
        </span>
        <span className="icon">
          <MdCompareArrows />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
