import React, { useState, useEffect } from "react";
import "../Header/Header.scss";
import { BsPerson, BsCart2 } from "react-icons/bs";
import { ImSphere } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.basketProducts);
  const itemCount = basketProducts.reduce(
    (total, product) => total + product.count,
    0
  );

  const total = basketProducts
    ?.map((pr) => {
      return pr?.count * pr?.pricesInUSD?.price;
    })
    ?.reduce((a, b) => a + b, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarStyles = isScrolled ? { backgroundColor: "black" } : {};
  const navbarBottomStyles = isScrolled ? { display: "none" } : {};

  return (
    <div id="header" style={navbarStyles}>
      <div className="header-top">
        <div className="container">
          <div className="navigation-bar">
            <ul className="main-nav">
              <li className="menu-links accessories">
                <a href="#">Gaming Accessories</a>
                <div class="menu-dropdown accessories-elements">
                  <div class="mega-menu-container">
                    <ul class="list-elements">
                      <li class="list-element">
                        <ul class="megamenu-list">
                          <li class="list-title">
                            <span>Pro Gaming</span>
                          </li>

                          <li>Game Console</li>

                          <li onClick={() => navigate("/shop")}>Game Shop</li>

                          <li>Gaming Cards</li>

                          <li>Gaming Chairs</li>

                          <li>Gaming Moniter</li>

                          <li>Gaming PCs</li>
                        </ul>
                      </li>

                      <li class="list-element">
                        <ul class="megamenu-list">
                          <li class="list-title">
                            <span>New Accessories</span>
                          </li>

                          <li>Alien ware Monitor</li>

                          <li>G-Series Curved VA Monitor</li>

                          <li>Cloud Alpha Gaming Headset</li>

                          <li>DualSense Wireless Controllers</li>

                          <li>Raptor Gameing Z95</li>

                          <li>KD DMTR Gaming Desktop PC</li>
                        </ul>
                      </li>

                      <li class="list-element">
                        <ul class="megamenu-list">
                          <li class="list-title">
                            <span>Master Game</span>
                          </li>

                          <li>Gaming Office Chair</li>

                          <li>Gaming Chair for Gamers with Lumbar</li>

                          <li>HTC Vive Tracker (3.0) - PC</li>

                          <li>VR Headset with Headphones</li>

                          <li>RX 590 GTS Graphics Card</li>

                          <li>RX 680 GTS Graphics Card</li>
                        </ul>
                      </li>

                      <li class="menubaner-img">
                        <img
                          className="menubaner"
                          src="/images/navbar.webp"
                          alt="menubaner"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-links pages">
                <a href="#">Pages</a>
                <div class="menu-dropdown pages-elements">
                  <ul className="list-elements">
                    <li class="list-element">
                      <a
                        className="element-link"
                        href="#"
                        onClick={() => navigate("/about")}
                      >
                        About Us
                      </a>
                    </li>

                    <li class="list-element">
                      <a className="element-link" href="/pages/contact-with-us">
                        Contact with us
                      </a>
                    </li>

                    <li class="list-element">
                      <a
                        className="element-link"
                        href="/pages/featured-asked-questions"
                      >
                        FAQ's
                      </a>
                    </li>

                    <li class="list-element">
                      <a className="element-link" href="/pages/privacy-policy">
                        Privacy Policy
                      </a>
                    </li>

                    <li class="list-element">
                      <a
                        className="element-link"
                        href="/pages/shipping-delivery"
                      >
                        Shipping &amp; Delivery
                      </a>
                    </li>

                    <li class="list-element">
                      <a
                        className="element-link"
                        href="/pages/terms-conditions"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-links blog">
                <a href="#">Blog</a>
                <div class="menu-dropdown blog-elements">
                  <ul className="list-elements">
                    <li class="list-element">
                      <a className="element-link" href="/pages/about-us">
                        About Us
                      </a>
                    </li>
                    <li class="list-element">
                      <a className="element-link" href="/pages/contact-with-us">
                        Contact with us
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="logo">
              <a href="#">
                <img src="/images/logo.png" alt="alma" />
              </a>
            </div>
            <ul className="nav-right">
              <li className="profile">
                <a href="#">
                  <BsPerson className="icon" />
                </a>
              </li>
              <li className="profile">
                <a href="#">
                  <ImSphere className="icon" />
                </a>
              </li>
              <li className="currency">
                <form>
                  <select>
                    <option>USD</option>
                  </select>
                </form>
              </li>
              <li className="cart" onClick={() => navigate("/basket")}>
                <span class="icon-label">
                  My Cart:
                  <b>
                    {total.toFixed(2)}
                    <span class="currency-type">USD</span>
                  </b>
                </span>
                <BsCart2 className="basket" />
                <span className="item-count">{itemCount} </span>
              </li>
              <li className="burger-menu">
                <div
                  className={`menu-button ${isOpen ? "open" : ""}`}
                  onClick={toggleMenu}
                >
                  {isOpen ? (
                    <AiOutlineClose />
                  ) : (
                    <RxHamburgerMenu className="menu-i" />
                  )}
                </div>
                {isOpen && (
                  <div className="menu-items">
                    <a href="/shop">Shop All</a>
                    <a href="/about">About Us</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact Us</a>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom" style={navbarBottomStyles}>
        <div className="container">
          <div className="left-element">
            <a href="/collections/bestseller">
              <b>New Accessories -30 %</b> Off. <span>More</span>
            </a>
          </div>
          <div className="search-input">
            <form>
              <div>
                <CiSearch className="search-icon" />
                <input className="search" placeholder="Search Product..." />
              </div>
            </form>
          </div>
          <div className="right-element">
            <a href="/collections/frontpage">New Collections</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
