// import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import Basket from "./pages/Basket/Basket";
import Shops from "./pages/Shop/Shop";
import { data } from "../src/data";
import { store, persistor } from "../src/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const products = Object.keys(data.products);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
                    <Basket item={data} />
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
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
