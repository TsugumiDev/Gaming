import React from "react";
import "../Footer/Footer.scss";
import { PiInstagramLogoLight } from "react-icons/pi";
import { LiaYoutube, LiaFacebookMessenger } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <img className="ring" src="/images/footer-ring.webp" />
      <img className="ring-left" src="/images/ring-left.webp" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-subscribe">
            <img src="/images/logo.png" />
            <h3>
              Reach out &amp; let your <b> mind explore </b>
            </h3>
            <p>
              I also love the challenge of trying to beat a difficult game or
              master a new skill.
            </p>
          </div>
          <div className="footer-link">
            <div class="footer-widget">
              <h4>Navigation:</h4>
              <ul>
                <li>
                  <a href="/search">Search</a>
                </li>

                <li>
                  <a href="/collections">All Collections</a>
                </li>

                <li>
                  <a href="/collections/all">All Products</a>
                </li>

                <li>
                  <a href="/blogs/news/best-gamers-desk-settings-for-amateurs-4">
                    Article Page
                  </a>
                </li>

                <li>
                  <a href="/blogs/news">Blog Page</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-link">
            <div class="footer-widget">
              <h4>About Us:</h4>

              <ul>
                <li>
                  <a href="/pages/about-us">About Us</a>
                </li>

                <li>
                  <a href="/pages/contact-with-us">Contact with us</a>
                </li>

                <li>
                  <a href="/pages/featured-asked-questions">FAQ's</a>
                </li>

                <li>
                  <a href="/pages/privacy-policy">Privacy Policy</a>
                </li>

                <li>
                  <a href="/pages/shipping-delivery">Shipping &amp; Delivery</a>
                </li>

                <li>
                  <a href="/pages/terms-conditions">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-icons">
            <h4> Share: </h4>
            <ul>
              <li>
                <a href="https://www.youtube.com/shopify" target="_blank">
                  <LiaYoutube className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/shopify" target="_blank">
                  <LiaFacebookMessenger className="social-icon" />
                </a>
              </li>
              <li>
                <a href="http://instagram.com/shopify" target="_blank">
                  <PiInstagramLogoLight className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/shopify" target="_blank">
                  <FiTwitter className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
