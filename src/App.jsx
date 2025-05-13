import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CartProvider from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import FeaturedPage from "./pages/FeaturedPage/FeaturedPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ToastContainer />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<ProductPage hasMarginTop={true} />}
            />
            <Route
              path="/productDetail/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/featured-products/:brand"
              element={<FeaturedPage />}
            />
            <Route path="/success" element={<h2>Payment Successful!</h2>} />
            <Route path="/cancel" element={<h2>Payment Cancelled</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
