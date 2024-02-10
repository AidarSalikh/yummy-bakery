import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllItems,
  addToCart,
  removeFromCart,
} from "../features/shop/shopSlice";

export function Modal() {
  const modalRef = useRef();
  const { modalId } = useParams();
  const navigate = useNavigate();
  const items = useSelector(selectAllItems);
  const dispatch = useDispatch();

  const id = Number(modalId);
  const singleItem = items.find((item) => item.id === id);

  function addItem() {
    dispatch(addToCart({ id }));
  }

  function removeItem() {
    dispatch(removeFromCart({ id }));
  }

  useEffect(() => {
    const observerRefValue = modalRef.current;
    disableBodyScroll(observerRefValue);
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, []);

  return (
    <div ref={modalRef} className="modal-wrapper" onClick={() => navigate(-1)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={singleItem.image} alt="" />
        <div className="description-modal">
          <p>{singleItem.name}</p>
          <p>{singleItem.body}</p>
          <p>{singleItem.price}</p>
        </div>
        <div className="empty"></div>
        {!singleItem.count ? (
          <button onClick={addItem} className="addToCart">
            Add to Cart
          </button>
        ) : (
          <div className="add-remove">
            <button onClick={removeItem}>-</button>
            <p className="count">{singleItem.count}</p>
            <button onClick={addItem}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
