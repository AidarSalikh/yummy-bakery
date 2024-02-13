import { getTotalPrice } from "../../features/shop/shopSlice";
import CartList from "./CartList";
import { useSelector } from "react-redux";

function Cart() {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <main className="cart">
      <CartList />
      <h4>Сумма заказа: {totalPrice}</h4>
    </main>
  );
}

export default Cart;
