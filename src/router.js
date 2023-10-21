import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Basket from "./pages/Basket/Basket";
import ProductPage from "./pages/ProductPage/ProductPage";
import Shops from "./pages/Shop/Shop";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <HomePage />
            </Wrapper>
          }
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          exact
          path="/about"
          element={
            <Wrapper>
              <About />
            </Wrapper>
          }
        />
        <Route
          exact
          path="/basket"
          element={
            <Wrapper>
              <Basket />
            </Wrapper>
          }
        />
        {/* <Route exact path="/modal" element={<ModalProduct />} /> */}
        <Route
          exact
          path="/products/:productName"
          element={
            <Wrapper>
              <ProductPage />
            </Wrapper>
          }
        />
        <Route
          exact
          path="/shop"
          element={
            <Wrapper>
              <Shops />
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
