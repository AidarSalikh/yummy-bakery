import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../../features/shop/shopSlice";
import { Link } from "react-router-dom";

function CartItem({ id, name, body, image, price, count }) {
  const dispatch = useDispatch();

  function addItem() {
    dispatch(addToCart({ id }));
  }

  function removeItem() {
    dispatch(removeFromCart({ id }));
  }

  function deleteItem() {
    dispatch(deleteFromCart({ id }));
  }

  const itemTotalPrice = count * price;

  return (
    <div className="cart-item">
      <img src={image} alt="" />
      <div className="cart-card-description">
        <h3>{name}</h3>
        <p>{price}</p>
        <h5 className="cart-item-total">Итого: {itemTotalPrice} Р</h5>
      </div>
      <div className="cart-item-buttons">
        <button onClick={addItem}>+</button>
        <p>{count}</p>
        <button onClick={removeItem}>-</button>
      </div>
      {/* <Link to={`/shop/${id}`}></Link> */}
      {/* <button onClick={deleteItem}>Delete</button> */}
    </div>
  );
}

export default CartItem;
