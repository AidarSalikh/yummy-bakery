import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getTotalPrice, selectAllItems } from "../../features/shop/shopSlice";
import useWindowSize from "../../hooks/useWindowSize";
import CategoryList from "./CategoryList";
import CategorySlider from "./CategorySlider";
import { FaBasketShopping } from "react-icons/fa6";
import digitFormatter from "../../utils/digitFormatter";

function Shop() {
  const shopItems = useSelector(selectAllItems);
  const totalPrice = useSelector(getTotalPrice);
  const { width } = useWindowSize();
  const cartCount = shopItems.reduce((acc, i) => acc + i.count, 0);

  const mobile = width < 768;

  return (
    <main className="shop">
      {mobile ? <CategorySlider /> : <CategoryList />}
      <Outlet />
      {!!cartCount && mobile && (
        <NavLink to={"/cart"} className="shop--mobile-cart-fixed">
          <span>Мой заказ - {digitFormatter(totalPrice)} &#8381;</span>

          <FaBasketShopping size={"22"} />
        </NavLink>
      )}
    </main>
  );
}

export default Shop;
