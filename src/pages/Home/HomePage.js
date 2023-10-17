// import React, { useRef, useState } from "react";
import "../Home/HomePage.scss";
import { BsController, BsSpeaker } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuBatteryFull } from "react-icons/lu";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import GamingProducts from "../../components/GamingProducts/GamingProducts";
import Testimonials from "../../components/Testimonials/Testimonials";
import { data } from "../../data";
import { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

const HomePage = ({ item }) => {
  const [categoryProducts, setCategoryProducts] = useState(
    data.products["Gaming peripherals"] || []
  );
  // const productCategories2 = Object.keys(data.blog);

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

  const filterCategory = (categoryName) => {
    const filteredList = data.products[categoryName];
    setCategoryProducts(filteredList);
  };

  return (
    <div className="home-page">
      {/* Shopify section */}
      <section id="shopify">
        <img className="circle-2" src="/images/design1.avif" alt="bg-img" />
        <img className="circle-1" src="/images/circle-1.webp" alt="bg-img" />
        <img className="games-img" src="/images/circle-2.png" alt="bg-img" />
        <img className="bluthoot-left" src="/images/bg-3.avif" alt="bg-img" />
        <img className="bluthoot-right" src="/images/bg-4.webp" alt="bg-img" />
        <img className="round-big" src="/images/bg-5.png" alt="bg-img" />
        <img className="round-small" src="/images/bg-6.webp" alt="bg-img" />
        <img className="full-bluthoot" src="/images/bg.avif" alt="bg-img" />
        <img className="top-start" src="/images/bg-8.png" alt="bg-img" />
        <div className="container">
          <div className="shopify-elements">
            <div className="banner-tagline">
              <span class="btn-label">Featured</span>
              <p className="label">
                New featured collection
                <a href="/collections/gaming-pcs"> \ Gaming. Collector</a>
              </p>
            </div>
            <div className="section-title">
              <h2 class="text">
                Best <b>Pro Gaming</b> Accessories
              </h2>
              <p>
                Gaming accessories include gear such as headsets, extra
                controllers, charging stations, memory devices, carrying cases
                and much more.
              </p>
            </div>
            <div className="show-btns">
              <a href="/collections/all" class="btn-products">
                <span> Show products</span>
                <BsController />
              </a>
              <a href="/collections" class="btn-products">
                <span>Show Collections</span>
                <BsController />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Products */}
      <section id="products">
        <img
          className="product-circle"
          src="/images/img-bg-p.webp"
          alt="circle"
        />
        <div className="container">
          <div className="product-top">
            <h2> Bestsellers of the week</h2>
            <div class="btn">
              <span>Show products</span>
              <IoGameControllerOutline className="controler" />
            </div>
          </div>
          <div className="product-swiper">
            <div className="products">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {Object.keys(data.products).map((category) => (
                  <div key={category}>
                    {data.products[category].map((product) => (
                      <SwiperSlide>
                        <ProductCard key={product.id} item={product} />
                      </SwiperSlide>
                    ))}
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Client Logo Section */}
      <section id="client-logo">
        <div className="container">
          <div className="swiper">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/client-logo.png" alt="client-logo" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Gaming Categories */}
      <section id="gaming-categories">
        <img
          className="gaming-circle"
          src="/images/design-3.webp"
          alt="circle"
        />
        <img
          className="gaming-console"
          src="/images/console.png"
          alt="console"
        />
        <div className="container">
          <div className="left">
            <div className="gaming-leftbar">
              <div class="section-title">
                <h2>
                  Best <b> Pro Gaming </b> Categories
                </h2>
              </div>
              <ul className="tab">
                {categories.map((item) => (
                  <li onClick={() => filterCategory(item.name)}>
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
              <div class="more-categories">
                <span>SHOW MORE CATEGORIES</span>
              </div>
            </div>
          </div>
          <div className="right">
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
              {categoryProducts.map((item) => (
                <SwiperSlide>
                  <ProductCard key={item?.id} item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* About our shop*/}
      <section id="about-our-shop">
        <img
          className="about-image-small"
          src="/images/about-us.png"
          alt="about-image"
        />
        <div className="container">
          <div className="about-title">
            <h2>About our shop</h2>
            <p className="about-text">
              Gaming can help to improve cognitive skills such as
              problem-solving, memory, and attention.
            </p>
          </div>
          <div className="about-elements">
            <div className="about-us-box">
              <h3 class="h2-title">01</h3>
              <h4 class="h3-title">Gift boxes</h4>
              <p>Finished products products and gift wrapping</p>
            </div>
            <div className="about-us-box">
              <h3 class="h2-title">02</h3>
              <h4 class="h3-title">Promotions</h4>
              <p>Large promotions with numerous discounts</p>
            </div>
            <div className="about-us-box">
              <h3 class="h2-title">03</h3>
              <h4 class="h3-title">Shipping</h4>
              <p>Free shipping on any order from $ 150</p>
            </div>
            <div className="about-us-box">
              <h3 class="h2-title">04</h3>
              <h4 class="h3-title">Quality</h4>
              <p>All products are made by engineers from India</p>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe */}
      <section id="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <div class="section-title">
              <span class="slide-label">Subscribe Us</span>
              <h2>
                Subscribe newsletter and <b>get -20% off</b>
              </h2>
              <p>
                Almost three-quarters of dedicated PC gamers say their main
                motivation to upgrade is improving gaming experiences.
              </p>
            </div>
            <div className="input-subscribe">
              <form>
                <input type="email" placeholder="Enter email address..." />
                <button type="submit" class="subscribe">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="subscribe-img">
            <img src="/images/subscribe-img.webp" alt="subscribe-img" />
          </div>
        </div>
      </section>

      {/*  Pro Gaming Products */}
      <section id="pro-gaming-products">
        <img
          className="gaming-products-one"
          src="/images/gaming-products-1.png"
          alt="gaming-products"
        />
        <img
          className="circle"
          src="/images/design-circle-4.webp"
          alt="design-circile"
        />
        <img
          className="design-circle"
          src="/images/design-circle-5.webp"
          alt="design-circile"
        />
        <div className="container">
          <div className="section-top">
            <div class="section-title-left">
              <h2>Best Pro Gaming Products</h2>
            </div>
            <div class="section-title-center">
              <p>
                More powerful hardware not only betters their experiences in
                games they're currently playing, but it also gives many players
                access to titles with more demanding specifications.
              </p>
            </div>
            <div class="section-title-right">
              <span class="btn">
                <span className="text">Show Products</span>
                <BsController className="controller-icon" />
              </span>
            </div>
          </div>
          <div className="section-bottom">
            <div className="section-bottom-left">
              <img src="/images/product-cpu.webp" alt="cpu" />
            </div>
            <div className="section-bottom-center">
              <div className="product-card-inner">
                <h3 class="product-title">KD DMTR ...</h3>
                <div class="card-info">
                  <p>
                    Multiple connectivity options including HDMI, USB ports &
                    RGB fans let you connect a variety of peripherals easily.
                    Wi-Fi Ready – Connect to the internet wirelessly with ease.
                    Preloaded with Windows 10 64-bit OS for enhanced
                    productivity and multitasking.
                  </p>
                </div>
                <div className="select-addtocart">
                  <div className="top">
                    <span className="text-small">Size :</span>
                    <select>
                      <option>256 GB - 865.00USD</option>
                      <option>364 GB - 900.00USD</option>
                    </select>
                  </div>
                  <div className="product-content-bottom">
                    <div className="content-left">
                      <span className="price">865.00</span>
                      <span className="unit">USD</span>
                    </div>
                    <div className="content-right">
                      <button className="product-from">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-bottom-right">
              <img src="/images/double.cpu.webp" alt="double-cpu" />
            </div>
          </div>
        </div>
      </section>

      {/*Gaming Products Second  */}

      <section id="gaming-products-second">
        <div className="products-container">
          <div className="section-content">
            <div className="section-bottom-left">
              <img src="/images/double-bluthoth.webp" alt="cpu" />
            </div>
            <div className="section-bottom-center">
              <div className="product-card-inner">
                <h3 class="product-title">Cloud Alpha...</h3>
                <div class="card-info">
                  <p>
                    Multiple connectivity options including HDMI, USB ports &
                    RGB fans let you connect a variety of peripherals easily.
                    Wi-Fi Ready – Connect to the internet wirelessly with ease.
                    Preloaded with Windows 10 64-bit OS for enhanced
                    productivity and multitasking.
                  </p>
                </div>
                <div className="select-addtocart">
                  <div className="top">
                    <span className="text-small">Color :</span>
                    <select>
                      <option>256 GB - 865.00USD</option>
                      <option>364 GB - 900.00USD</option>
                    </select>
                  </div>
                  <div className="product-content-bottom">
                    <div className="content-left">
                      <span className="price">865.00</span>
                      <span className="unit">USD</span>
                    </div>
                    <div className="content-right">
                      <button className="product-from">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-bottom-right">
              <img src="/images/full-width-bluthhoth.webp" alt="double-cpu" />
            </div>
          </div>
        </div>
      </section>
      {/* Gaming Blog */}
      <section id="gaming-blog">
        <img
          className="blog-ring"
          src="/images/blog-ring-1.png"
          alt="blog-ring"
        />
        <img
          className="full-bluthooth"
          src="/images/full-bluthooth.png"
          alt="blog-ring"
        />
        <div className="container">
          <div className="section-top">
            <div class="section-title-left">
              <h2>
                Best <b>Pro Gaming</b> Blog
              </h2>
            </div>
            <div class="section-title-center">
              <p>
                Gaming Product means any intangible asset, good or interest that
                can be bought or sold or otherwise is the subject of an activity
                constituting a Gaming Business.
              </p>
            </div>
            <div class="section-title-right">
              <span class="btn">
                <span className="text">Show More</span>
                <BsController className="controller-icon" />
              </span>
            </div>
          </div>

          <div className="blog-items">
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
              {data.blog.map((product) => (
                <SwiperSlide>
                  <BlogCard key={product.id} item={product} />
                  <BlogCard key={product.id} item={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <GamingProducts />

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
    </div>
  );
};

export default HomePage;
