import React from "react";
import AboutProduct from "../../components/AboutProduct/AboutProduct";
import "../ProductPage/ProductPage.scss";
import ViewedProducts from "../../components/ViewedProducts/ViewedProducts";
// icons
import { BsSpeaker } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuBatteryFull } from "react-icons/lu";
import { data } from "../../data";
import Testimonials from "../../components/Testimonials/Testimonials";
import GamingProducts from "../../components/GamingProducts/GamingProducts";
const ProductPage = () => {
  const productCategories = Object.keys(data.products);
  const categories = [
    {
      icon: <IoGameControllerOutline className="icon" />,
      name: productCategories[0],
    },
    {
      icon: <BsSpeaker className="icon" />,
      name: productCategories[1],
    },
    {
      icon: <LuBatteryFull className="icon" />,
      name: productCategories[2],
    },
  ];

  return (
    <div className="product-page">
      <AboutProduct />
      <ViewedProducts />
      <section id="parametr-filter">
        <div className="container">
          <div className="left">
            <img
              src="/images/product-cpu.webp"
              alt="img-product"
              className="img-product"
            />
          </div>
          <div className="center">
            <ul className="tab">
              {categories.map((item) => (
                <li>
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <img
              src="/images/double.cpu.webp"
              alt="element-img"
              className="element-img"
            />
          </div>
        </div>
      </section>
      <Testimonials />
      <GamingProducts />
    </div>
  );
};

export default ProductPage;
