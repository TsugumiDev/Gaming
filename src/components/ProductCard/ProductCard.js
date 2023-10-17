import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import "../ProductCard/ProductCard.scss";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasketAction } from "../../store/actions/actions";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import GamingProducts from "../GamingProducts/GamingProducts";
import AboutProduct from "../AboutProduct/AboutProduct";
import ModalProduct from "../ModalProduct/ModalProduct";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const productCategories = Object.keys(data.products);

  // Basket

  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.basketProducts);

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

  const goToProductPage = (e) => {
    navigate(`/products/${item?.routeName}`);
  };

  useEffect(() => {
    setSrc(`/images/products/${item?.routeName}/${selectedObj?.image}`);
  }, [item?.routeName, selectedObj?.image]);

  const handleAddToBasket = (event) => {
    event.stopPropagation();
    const findedItem = basketProducts?.find(
      (item) => item?.products?.productName === data?.productName
    );
    if (findedItem == undefined) {
      dispatch(
        addToBasketAction([...basketProducts, { item: data, count: 1 }])
      );
    } else {
      const filteredProducts = basketProducts?.filter(
        (item) => item?.products?.productName !== data?.productName
      );
      dispatch(
        addToBasketAction([
          ...filteredProducts,
          { item: data, count: findedItem.count + 1 },
        ])
      );
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <button type="submit" onClick={handleAddToBasket}>
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
        <span className="modal">
          <div className="modal-produt">
            <Button
              className="btn"
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(true)}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <IoEyeOutline />
            </Button>
            <Modal
              variant="outlined"
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 1300,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                  border: "1px solid red",
                  backgroundColor: "black",
                }}
              >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  fontWeight="lg"
                  mb={1}
                >
                  <ModalProduct key={item?.id} item={item} />
                </Typography>
                <Typography
                  id="modal-desc"
                  textColor="text.tertiary"
                ></Typography>
              </Sheet>
            </Modal>
          </div>
        </span>
        <span className="icon">
          <MdCompareArrows />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
