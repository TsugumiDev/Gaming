import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../About/About.scss";
const About = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home");
  };

  return (
    <div className="about-page">
      {/* Baner Section */}
      <section id="banner-section">
        <div className="container">
          <div className="section-content">
            <div className="back-btn" onClick={redirectToHome}>
              <BsArrowLeft className="icon-back" />
              <span class="back-home">Back to Home</span>
            </div>
            <div class="section-title">
              <h2>About Us</h2>
            </div>
            <p className="about-text">
              The gaming industry continues to push the boundaries of
              innovation, offering virtual reality experiences that blur the
              lines between the real and the digital.
            </p>
          </div>
        </div>
      </section>
      {/* About Game Section */}
      <section id="about-game">
        <div className="container">
          <div class="section-title">
            <h2>Where Fantasy and Reality Collide</h2>
          </div>
          <div className="section-bottom">
            <div className="bottom-element">
              <p>
                Prepare to embark on thrilling gaming journeys that transport
                you to uncharted territories, distant galaxies, and epic
                battlegrounds. Our gaming paradise offers an unparalleled blend
                of excitement, competition, and camaraderie, inviting players of
                all levels to unleash their inner warriors and embrace the
                exhilaration of play. Immerse yourself in cutting-edge graphics,
                captivating storylines, and dynamic gameplay that push the
                boundaries of what's possible. From action-packed shooters that
                demand lightning-fast reflexes to immersive role-playing games
                that invite you to shape your destiny, our collection of games
                spans genres and offers endless possibilities.
              </p>
            </div>
            <div className="bottom-element">
              <p>
                Whether you're a seasoned pro or a novice explorer, our gaming
                environment provides a space for both competition and
                collaboration. Connect with fellow gamers from around the world,
                form alliances, and embark on quests together, or go
                head-to-head in intense multiplayer battles that test your
                skills and strategies. Experience gaming like never before with
                our state-of-the-art technology and high-performance equipment.
                Immerse yourself in vivid worlds through cutting-edge virtual
                reality experiences or feel the precision and responsiveness of
                our top-of-the-line gaming accessories.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gaming Adventures */}
      <section id="gaming-adventures">
        <div className="container">
          <div className="section-title">
            <h2>Immersive Gaming Adventures: Unleash the Power of Play</h2>
          </div>
          <div className="section-bottom">
            <div className="information">
              <div class="section-title">
                <h3>Explore the Ultimate Gaming Experience</h3>
              </div>
              <p>
                We're dedicated to providing an unrivaled gaming experience that
                leaves you fully immersed and connected to the digital realms
                you love. But gaming is more than just entertainment; it's a
                community. Join us in fostering a vibrant and inclusive gaming
                culture that celebrates diversity and empowers players to
                connect, compete, and grow. Share your achievements, engage in
                lively discussions, and forge lasting friendships with
                like-minded gamers who share your passion and enthusiasm.
              </p>
              <p>
                Whether you seek the adrenaline rush of competitive gaming, the
                exploration of vast virtual landscapes, or the joy of unraveling
                intricate puzzles, our gaming offerings cater to your every
                desire. Unlock your potential, unleash your creativity, and
                embark on unforgettable gaming adventures that will keep you
                captivated for hours on end.
              </p>
            </div>
            <div className="image">
              <img src="/images/abt-1.webp" alt="bg-img" />
            </div>
          </div>
          <div className="section-bottom">
            <div className="image">
              <img src="/images/abt-2.webp" alt="bg-img" />
            </div>
            <div className="information">
              <div class="section-title">
                <h3>Explore the Ultimate Gaming Experience</h3>
              </div>
              <p>
                We're dedicated to providing an unrivaled gaming experience that
                leaves you fully immersed and connected to the digital realms
                you love. But gaming is more than just entertainment; it's a
                community. Join us in fostering a vibrant and inclusive gaming
                culture that celebrates diversity and empowers players to
                connect, compete, and grow. Share your achievements, engage in
                lively discussions, and forge lasting friendships with
                like-minded gamers who share your passion and enthusiasm.
              </p>
              <p>
                Whether you seek the adrenaline rush of competitive gaming, the
                exploration of vast virtual landscapes, or the joy of unraveling
                intricate puzzles, our gaming offerings cater to your every
                desire. Unlock your potential, unleash your creativity, and
                embark on unforgettable gaming adventures that will keep you
                captivated for hours on end.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Our Services */}

      <section id="about-services">
        <div className="container">
          <div class="section-title">
            <h2>About our services</h2>
            <p>
              Our mission is to empower individuals with knowledge and
              facilitate meaningful connections through our platform.We
              understand the importance of reliable and up-to-date information
              in today's fast-paced world.
            </p>
          </div>

          <div className="section-bottom">
            <div class="about-us-boxs">
              <img src="/images/icon-a.png" />
              <h3>Fast delivery</h3>
              <p>
                The specific delivery time will vary depending on the shipping
                address and the selected delivery option. Customers can track
                their order online to see the estimated delivery date.
              </p>
            </div>
            <div class="about-us-boxs">
              <img src="/images/icon-b.png" alt="image-icon" />
              <h3>Many offers</h3>
              <p>
                CMS also offers a variety of training and technical assistance
                to help providers and state agencies meet their responsibilities
                under Medicare, Medicaid, and SCHIP.
              </p>
            </div>
            <div class="about-us-boxs">
              <img src="/images/icon-c.png" alt="image-icon" />
              <h3>24/7 support</h3>
              <p>
                CMS Service support is available 24 hours a day, 7 days a week.
                You can reach them by phone, email, or chat. Here are the
                contact information for CMS Service support:
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
