import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/shop/shopSlice";
import { Link, useLocation } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

function ProductItem({ id, name, body, image, count, price, category }) {
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  const location = useLocation();

  function addItem() {
    dispatch(addToCart({ id }));
  }

  function removeItem() {
    dispatch(removeFromCart({ id }));
  }

  const prevLocation = width > 768 ? { previousLocation: location } : null;

  return (
    <div className="product-card">
      <Link to={`/shop/${category}/${id}`} state={prevLocation}>
        <img src={image} alt="product image" />
      </Link>
      <div className="card-content">
        <p>{name}</p>
        <p>{body}</p>
      </div>
      <div className="card-buttons">
        <p className="card-product-price">{price} &#8381;</p>
        {!count ? (
          <button onClick={addItem} className="add-to-cart-btn">
            В КОРЗИНУ
          </button>
        ) : (
          <div className="add-remove">
            <FaSquareMinus onClick={removeItem} className="add-remove-icon" />
            <p className="count">{count}</p>
            <FaSquarePlus onClick={addItem} className="add-remove-icon" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
