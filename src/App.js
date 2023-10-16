// import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import Basket from "./pages/Basket/Basket";
import Shops from "./pages/Shop/Shop";
// import ModalProduct from "./components/ModalProduct/ModalProduct";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/basket" element={<Basket />} />
          {/* <Route exact path="/modal" element={<ModalProduct />} /> */}
          <Route
            exact
            path="/products/:productName"
            element={<ProductPage />}
          />
          <Route exact path="/shop" element={<Shops />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
