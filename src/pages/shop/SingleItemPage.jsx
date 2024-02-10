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

  return (
    <div>
      <Link to={`/shop/${singleItem.category}`}>Go back</Link>
      SingleItemPage {id}
      <p>Count: {singleItem.count}</p>
      <button onClick={() => dispatch(addToCart({ id }))}>Add</button>
      <button onClick={() => dispatch(removeFromCart({ id }))}>Remove</button>
    </div>
  );
}

export default SingleItemPage;
