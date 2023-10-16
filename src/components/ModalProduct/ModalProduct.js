import React, { useState, useEffect } from "react";
import "../ModalProduct/ModalProduct.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ModalProduct = ({ item }) => {
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

  useEffect(() => {
    setSrc(`/images/products/${item?.routeName}/${selectedObj?.image}`);
  }, [item?.routeName, selectedObj?.image]);

  console.log(src);
  console.log("11", item?.routeName, selectedObj?.image);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal-product">
      <div className="container">
        <div className="left">
          <div className="common-heading">
            <h2 className="info-title">{item?.productName}</h2>
            <p className="info-description">{item?.description}</p>
          </div>
          <div class="product-select">
            <div class="pro-labl">{colorOrSizeObj.label}</div>
            <select
              class="selected"
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
              <span className="number">{selectedObj?.pricesInUSD?.price}</span>
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
          </div>
        </div>
        <div className="right">
          <img src={src} alt={item?.productName} />
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
