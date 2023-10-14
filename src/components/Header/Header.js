import React from "react";
import "../Header/Header.scss";
import { BsPerson, BsCart2 } from "react-icons/bs";
import { ImSphere } from "react-icons/im";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="container">
          <div className="navigation-bar">
            <ul className="main-nav">
              <li className="menu-links">
                <a href="#">Gaming Accessories</a>
              </li>
              <li className="menu-links">
                <a href="#">Pages</a>
              </li>
              <li className="menu-links">
                <a href="#">Blog</a>
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
              <li className="cart">
                <a href="#">
                  <span class="icon-label">
                    My Cart:
                    <b>
                      9,470.00<span class="currency-type">USD</span>
                    </b>
                  </span>
                  <BsCart2 className="basket" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
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
