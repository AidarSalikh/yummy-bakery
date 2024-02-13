import { Link } from "react-router-dom";
import { getTotalPrice } from "../../features/shop/shopSlice";
import CartList from "./CartList";
import { useSelector } from "react-redux";

function Cart() {
  const totalPrice = useSelector(getTotalPrice);

  return (
    <main className="cart">
      {!totalPrice && (
        <div className="cart--empty-cart">
          <h2>Корзина пуста</h2>
          <Link to="/shop">Перейти в Меню</Link>
        </div>
      )}
      {!!totalPrice && (
        <>
          <CartList />
          <h4>Сумма заказа: {totalPrice}</h4>
        </>
      )}
    </main>
  );
}

export default Cart;
