import { getTotalPrice } from "../../features/shop/shopSlice";
import CartList from "./CartList";
import { useSelector } from "react-redux";

function Cart() {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <main>
      <CartList />
      <p>Total: {totalPrice}</p>
    </main>
  );
}

export default Cart;
