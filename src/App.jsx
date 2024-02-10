import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Layout from "./components/Layout";
import SingleItemPage from "./pages/shop/SingleItemPage";

import Category from "./pages/shop/Category";
import ProductItemsList from "./pages/shop/ProductItemsList";
import { Modal } from "./components/Modal";

function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <div className="App">
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />}>
            <Route index element={<ProductItemsList />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:itemId" element={<SingleItemPage />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>

      {previousLocation && (
        <Routes>
          <Route path="shop/:category/:modalId" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
