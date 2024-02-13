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
      <div>
        <p>{name}</p>
        <p>{body}</p>
      </div>
      <div className="product-card--btn-container">
        <p className="product-card--price">{price} &#8381;</p>
        {!count ? (
          <button onClick={addItem} className="product-card--add-to-cart-btn">
            В КОРЗИНУ
          </button>
        ) : (
          <div className="product-card--add-remove">
            <FaSquareMinus
              onClick={removeItem}
              className="product-card--add-remove-icon"
            />
            <p className="product-card--count">{count}</p>
            <FaSquarePlus
              onClick={addItem}
              className="product-card--add-remove-icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
