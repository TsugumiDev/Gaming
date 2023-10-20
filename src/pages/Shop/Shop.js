import React, { useState, useEffect } from "react";
import "../Shop/Shop.scss";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { data } from "../../data.js";
import ProductCard from "../../components/ProductCard/ProductCard";

// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Shops = () => {
  const navigate = useNavigate();
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [inStock, setInStock] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [inStockFilter, setInStockFilter] = useState(false);

  useEffect(() => {
    // Your data fetching or initialization logic here
    const initialProducts = Object.values(data.products).flat();
    setProducts(initialProducts);
    setFilteredProducts(initialProducts);
  }, []);

  useEffect(() => {
    // Apply filtering based on the selected criteria
    let filtered = products;

    if (inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    setFilteredProducts(filtered);
  }, [inStock]);

  const [products, setProducts] = useState([]);
  const [filteredListByColor, setFilteredListByColor] = useState([]);
  const [filteredListByType, setFilteredListByType] = useState([]);
  const [filteredProductType, setfilteredProductType] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [productList1, setProductList1] = useState([]);

  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [productType, setproductType] = useState("");

  const filterProductsByPrice = (products, min, max) => {
    return products.filter((product) => {
      const price = parseFloat(product.priceItem);
      return (
        (!min || price >= parseFloat(min)) && (!max || price <= parseFloat(max))
      );
    });
  };
  useEffect(() => {
    const list = Object.values(data.products).flat();
    setProductList1(filterProductsByPrice(list, minPrice, maxPrice));
  }, [minPrice, maxPrice]);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  useEffect(() => {
    const selected = Object.values(data.products).flat();
    if (selected) {
      setProducts(selected);
    }
  }, []);

  useEffect(() => {
    const list = Object.values(data.products).flat();
    setFilteredListByColor(
      list?.filter((item) => {
        return item.colors?.find((i) => i.color === color);
      })
    );
  }, [color]);

  useEffect(() => {
    const list = Object.values(data.products).flat();
    setfilteredProductType(
      list?.filter((item) => {
        return item.productType === productType;
      })
    );
  }, [productType]);

  useEffect(() => {
    const list = Object.values(data.products).flat();
    setFilteredListByType(
      list?.filter((item) => {
        return item.type === type;
      })
    );
  }, [type]);

  const handleCheckboxColor = (e) => {
    setColor("");
    if (color === e.target.name) {
      setColor("");
    } else {
      setColor(e.target.name);
    }
  };
  const handleCheckboxType = (e) => {
    setType("");
    if (type === e.target.name) {
      setType("");
    } else {
      setType(e.target.name);
    }
  };
  const handleCheckboxProductType = (e) => {
    if (productType === e.target.name) {
      setproductType("");
    } else {
      setproductType(e.target.name);
    }
  };

  const handleAccordionClick1 = (e) => {
    setIsExpanded1(!isExpanded1);
  };
  const handleAccordionClick2 = (e) => {
    setIsExpanded2(!isExpanded2);
  };
  const handleAccordionClick3 = (e) => {
    setIsExpanded3(!isExpanded3);
  };
  const handleAccordionClick4 = (e) => {
    setIsExpanded4(!isExpanded4);
  };
  const handleAccordionClick5 = (e) => {
    setIsExpanded5(!isExpanded5);
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  let productList = products;

  if (type) productList = filteredListByType;
  if (color) productList = filteredListByColor;
  if (productType) productList = filteredProductType;
  if (minPrice || maxPrice) productList = productList1;
  if (inStock) productList = filteredProductType;

  return (
    <div className="shop">
      <div className="container">
        <div className="section-content">
          <div className="container">
            <div className="back-btn" onClick={redirectToHome}>
              <BsArrowLeft className="icon-back" />
              <span class="back-home">Back to Home</span>
            </div>
            <div class="section-title">
              <h2>Game Remote</h2>
              <span className="num">(4)</span>
            </div>
            <p className="about-text">
              A game controller, gaming controller, or simply controller, is an
              input device used with video games or entertainment systems to
              provide input to a video game, typically to control an object or
              character in the game. Before the seventh generation of video game
              consoles, plugging in a controller into one of a console's
              controller ports was the primary means of using a game controller,
              although since then they have been replaced by wireless
              controllers, which do not require controller ports on the console
              but are battery-powered.
            </p>
          </div>
        </div>
        <div className="section-bottom">
          <div className="container">
            <div className="left">
              <div class="filter-title">
                <h4 class="desk-only">Filters</h4>
              </div>
              <div className="filter-products">
                <Accordion
                  expanded={isExpanded1}
                  onChange={handleAccordionClick1}
                  className="accordion1"
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panela-header"
                  >
                    <Typography className="title">Availability</Typography>
                    {isExpanded1 ? <HorizontalRuleIcon /> : <AddIcon />}
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details">
                    <Typography className="element">
                      <div className="availability-details">
                        <div className="top">
                          <span class="selected">0 selected</span>
                          <span className="reset">Reset</span>
                        </div>
                        <ul className="acardion-filter-list">
                          <li>
                            <label class="acardion-checkbox">
                              <input
                                type="checkbox"
                                checked={inStock}
                                onChange={(e) => setInStock(e.target.checked)}
                              />
                              <span>In stock</span>
                            </label>
                            <span class="filter-count">(3)</span>
                          </li>
                          <li>
                            <label class="acardion-checkbox">
                              <input type="checkbox" />
                              <span>Out of stock</span>
                            </label>
                            <span class="filter-count">(1)</span>
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={handleAccordionClick2}
                  className="accordion2"
                >
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panela-header"
                  >
                    <Typography className="title">Price</Typography>
                    {isExpanded2 ? <HorizontalRuleIcon /> : <AddIcon />}
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details">
                    <Typography className="element">
                      <div className="price-detalis">
                        <div className="top">
                          <span class="selected">
                            The highest price is 646.00USD
                          </span>
                          <span className="reset">Reset</span>
                        </div>
                        <div class="filter-price">
                          <div class="field">
                            <label class="field-label">Min price:</label>
                            <input
                              className="field-input"
                              type="text"
                              placeholder="Min Price"
                              value={minPrice}
                              onChange={handleMinPriceChange}
                            />
                          </div>
                          <div class="field">
                            <label class="field-label">Max price:</label>
                            <input
                              className="field-input"
                              type="text"
                              placeholder="Max Price"
                              value={maxPrice}
                              onChange={handleMaxPriceChange}
                            />
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={handleAccordionClick3}
                  className="accordion3"
                >
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panela-header"
                  >
                    <Typography className="title">Product type</Typography>
                    {isExpanded3 ? <HorizontalRuleIcon /> : <AddIcon />}
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details">
                    <Typography className="element">
                      <div className="product-type-detalis">
                        <div className="top">
                          <span class="selected">0 selected</span>
                          <span className="reset">Reset</span>
                        </div>
                        <ul className="acardion-filter-list">
                          <li>
                            <label class="acardion-checkbox">
                              <input
                                type="checkbox"
                                onClick={handleCheckboxProductType}
                                name="Headset"
                                checked={type === "Headset"}
                              />
                              <span>Headset</span>
                            </label>
                            <span class="filter-count">(3)</span>
                          </li>
                          <li>
                            <label class="acardion-checkbox">
                              <input
                                type="checkbox"
                                onClick={handleCheckboxProductType}
                                name="Keycaps"
                                checked={type === "Keycaps"}
                              />
                              <span>Keycaps</span>
                            </label>
                            <span class="filter-count">(1)</span>
                          </li>
                          <li>
                            <label class="acardion-checkbox">
                              <input
                                type="checkbox"
                                onClick={handleCheckboxProductType}
                                name="Remote"
                                checked={type === "Remote"}
                              />
                              <span>Remote</span>
                            </label>
                            <span class="filter-count">(1)</span>
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={handleAccordionClick5}
                  className="accordion4"
                >
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panela-header"
                  >
                    <Typography className="title">Brand</Typography>
                    {isExpanded5 ? <HorizontalRuleIcon /> : <AddIcon />}
                  </AccordionSummary>
                  <AccordionDetails className="acardion-detalis">
                    <Typography className="element">
                      <div className="brand-detalis">
                        <div className="top">
                          <span class="selected">0 selected</span>
                          <span className="reset" onClick={() => setType("")}>
                            Reset
                          </span>
                        </div>
                        <ul className="acardion-filter-list">
                          <li>
                            <label class="acardion-checkbox">
                              <input
                                type="checkbox"
                                name="XFX"
                                checked={type === "XFX"}
                                onChange={handleCheckboxType}
                              />
                              <span>XFX</span>
                            </label>
                            <span class="filter-count">(3)</span>
                          </li>
                          <li>
                            <label class="acardion-checkbox">
                              <input
                                type="checkbox"
                                name="Sony PS5"
                                checked={type === "Sony PS5"}
                                onChange={handleCheckboxType}
                              />
                              <span>Sony PS5</span>
                            </label>
                            <span class="filter-count">(1)</span>
                          </li>
                          <li>
                            <label class="acardion-checkbox">
                              <input
                                type="checkbox"
                                name="Vulture"
                                checked={type === "Vulture"}
                                onChange={handleCheckboxType}
                              />
                              <span>Vulture</span>
                            </label>
                            <span class="filter-count">(1)</span>
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={handleAccordionClick4}
                  className="accordion5"
                >
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panela-header"
                  >
                    <Typography className="title">Color</Typography>
                    {isExpanded4 ? <HorizontalRuleIcon /> : <AddIcon />}
                  </AccordionSummary>
                  <AccordionDetails className="accordion-detalis">
                    <Typography className="element">
                      <div className="color-detalis">
                        <div className="top">
                          <span class="selected">0 selected</span>
                          <span className="reset" onClick={() => setColor("")}>
                            Reset
                          </span>
                        </div>
                        <ul className="accordion-filter-list">
                          <li>
                            <label class="accordion-checkbox">
                              <input
                                type="checkbox"
                                name="black"
                                checked={color === "black"}
                                onChange={handleCheckboxColor}
                              />
                              <span>Black</span>
                            </label>
                            {/* <span class="filter-count">
                              {
                                filteredByColor["Gaming peripherals"]?.filter(
                                  (product) =>
                                    product.colors.some(
                                      (colorItem) => colorItem.color === "black"
                                    )
                                ).length
                              }
                            </span> */}
                          </li>
                          <li>
                            <label class="accordion-checkbox">
                              <input
                                type="checkbox"
                                name="green"
                                checked={color === "green"}
                                onChange={handleCheckboxColor}
                              />
                              <span>Green</span>
                            </label>
                            {/* <span class="filter-count">
                              {
                                filteredByColor["Gaming peripherals"]?.filter(
                                  (product) =>
                                    product.colors.some(
                                      (colorItem) => colorItem.color === "green"
                                    )
                                ).length
                              }
                            </span> */}
                          </li>
                          <li>
                            <label class="accordion-checkbox">
                              <input
                                type="checkbox"
                                name="red"
                                checked={color === "red"}
                                onChange={handleCheckboxColor}
                              />
                              <span>Red</span>
                            </label>
                            {/* <span class="filter-count">
                              {
                                filteredByColor["Gaming peripherals"]?.filter(
                                  (product) =>
                                    product.colors.some(
                                      (colorItem) => colorItem.color === "red"
                                    )
                                ).length
                              }
                            </span> */}
                          </li>
                          <li>
                            <label class="accordion-checkbox">
                              <input
                                type="checkbox"
                                name="white"
                                checked={color === "white"}
                                onChange={handleCheckboxColor}
                              />
                              <span>White</span>
                            </label>
                            {/* <span class="filter-count">(1)</span> */}
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className="right">
              <div className="container">
                <div className="products">
                  {/* {Object.keys(data.products).map((category) => (
                    <div key={category}>
                      {data.products[category].map((product) => (
                        <ProductCard key={product.id} item={product} />
                      ))}
                    </div>
                  ))} */}

                  {productList.map((product) => (
                    <ProductCard key={product.id} item={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
