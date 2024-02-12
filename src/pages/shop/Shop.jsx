import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getTotalPrice, selectAllItems } from "../../features/shop/shopSlice";
import useWindowSize from "../../hooks/useWindowSize";
import SliderContainer from "./SliderContainer";
import CategoryList from "./CategoryList";

function Shop() {
  const shopItems = useSelector(selectAllItems);
  const totalPrice = useSelector(getTotalPrice);
  const { width } = useWindowSize();
  const cartCount = shopItems.reduce((acc, i) => acc + i.count, 0);

  const mobile = width < 768;

  return (
    <main className="shop">
      {mobile ? <SliderContainer /> : <CategoryList />}
      <Outlet />
      {cartCount && mobile && (
        <NavLink to={"/cart"} className="mobile-cart-fixed">
          В КОРЗИНЕ {cartCount} ТОВАРА НА {totalPrice}
        </NavLink>
      )}

      {/* <ProductItemsList /> */}
    </main>
  );
}

export default Shop;
