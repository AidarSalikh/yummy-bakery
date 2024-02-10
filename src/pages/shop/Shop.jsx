import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getTotalPrice, selectAllItems } from "../../features/shop/shopSlice";
import useWindowSize from "../../hooks/useWindowSize";

function Shop() {
  const shopItems = useSelector(selectAllItems);
  const totalPrice = useSelector(getTotalPrice);
  const { width } = useWindowSize();
  const cartCount = shopItems.reduce((acc, i) => acc + i.count, 0);
  console.log(cartCount);

  return (
    <main className="shop">
      <ul className="shop-nav">
        <li>
          <Link to={`cakes`}>Торты</Link>
        </li>
        <li>
          <Link to={`trifles`}>Трайфалы</Link>
        </li>
        <li>
          <Link to={`merengue`}>Меренговый</Link>
        </li>
        <li>
          <Link to={`/shop`}>Все</Link>
        </li>
      </ul>
      <Outlet />
      {cartCount && width < 768 && (
        <NavLink to={"/cart"} className="mobile-cart-fixed">
          В КОРЗИНЕ {cartCount} ТОВАРА НА {totalPrice}
        </NavLink>
      )}

      {/* <ProductItemsList /> */}
    </main>
  );
}

export default Shop;
