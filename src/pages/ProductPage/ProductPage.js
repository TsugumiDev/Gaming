import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const ProductPage = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState();
  console.log(productName, product);

  useEffect(() => {
    setProduct(
      Object.values(data.products)
        .flat()
        .find((item) => item.routeName === productName)
    );
  }, [productName]);

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
      <AboutProduct item={product} />
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
      {/* <Testimonials /> */}
      <div id="testimonials">
        <div className="container">
          <div className="section-top">
            <div class="section-title-left">
              <h2>Testimonials</h2>
            </div>
            <div class="section-title-right">
              <p>
                A video game console is an electronic device that outputs a
                video signal or image to display a video game that can be played
                with a game controller.
              </p>
            </div>
          </div>
          <div className="testimonials-swiper">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.testimonials.map((product) => (
                <SwiperSlide>
                  <Testimonials key={product.id} item={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <GamingProducts />
    </div>
  );
};

export default ProductPage;
