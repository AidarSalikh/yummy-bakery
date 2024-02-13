import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAllItems,
} from "../../features/shop/shopSlice";

function SingleItemPage() {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const shopItems = useSelector(selectAllItems);

  const id = Number(itemId);
  const singleItem = shopItems.find((item) => item.id === id);

  const { name, count, price, body, image } = singleItem;

  return (
    <div className="singleItemPage-container">
      <Link to={`/shop/${singleItem.category}`}>&#x2190;Назад</Link>
      <img src={image} alt="" />
      <h3> {name}</h3>
      <p>Count: {count}</p>
      <p>{price}</p>
      <p>{body}</p>
      <button onClick={() => dispatch(removeFromCart({ id }))}>Remove</button>
      <button onClick={() => dispatch(addToCart({ id }))}>Add</button>
    </div>
  );
}

export default SingleItemPage;
