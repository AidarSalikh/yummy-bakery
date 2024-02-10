import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { selectAllItems } from "../../features/shop/shopSlice";

function CartList() {
  const shopItems = useSelector(selectAllItems);
  const cartItems = shopItems.filter((item) => item.count > 0);

  return (
    <div className="cart-list">
      {!!cartItems.length &&
        cartItems.map((item) => <CartItem key={item.id} {...item} />)}
    </div>
  );
}

export default CartList;
